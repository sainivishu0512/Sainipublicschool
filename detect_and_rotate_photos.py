import os
import cv2
import numpy as np
from PIL import Image

pub_dir = r"c:\Users\Vishu\Documents\antigravity\lucid-galileo\public\images\school"

# Load OpenCV's pre-trained face cascades
face_cascade_path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
profile_cascade_path = cv2.data.haarcascades + 'haarcascade_profileface.xml'

face_cascade = cv2.CascadeClassifier(face_cascade_path)
profile_cascade = cv2.CascadeClassifier(profile_cascade_path)

def count_faces(gray_img):
    faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=4, minSize=(30, 30))
    profiles = profile_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=4, minSize=(30, 30))
    
    # Merge/count unique
    all_boxes = list(faces) + list(profiles)
    return len(all_boxes), all_boxes

def analyze_photo(img_path):
    img = cv2.imread(img_path)
    if img is None:
        return None
    
    h, w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Test 4 orientations: 0, 90 CW (rotate_90), 180 (rotate_180), 270 CW (rotate_270)
    rotations = [
        (0, gray),
        (90, cv2.rotate(gray, cv2.ROTATE_90_CLOCKWISE)),
        (180, cv2.rotate(gray, cv2.ROTATE_180)),
        (270, cv2.rotate(gray, cv2.ROTATE_90_COUNTERCLOCKWISE))
    ]
    
    results = {}
    for deg, rotated_gray in rotations:
        count, boxes = count_faces(rotated_gray)
        results[deg] = (count, boxes)
    
    # Check if rotated has significantly more faces than 0 deg
    faces_0 = results[0][0]
    best_deg = 0
    max_faces = faces_0
    
    for deg in [90, 180, 270]:
        if results[deg][0] > max_faces and results[deg][0] >= 1:
            # If 0 deg had 0 faces, or rotated has strictly more faces
            if faces_0 == 0 or results[deg][0] > faces_0 + 1:
                max_faces = results[deg][0]
                best_deg = deg
                
    # Calculate face center for best orientation
    best_boxes = results[best_deg][1]
    face_center = None
    if len(best_boxes) > 0:
        # Calculate center of mass of all faces
        xs = [b[0] + b[2]/2 for b in best_boxes]
        ys = [b[1] + b[3]/2 for b in best_boxes]
        # Calculate in the rotated dimension
        rot_h, rot_w = (h, w) if best_deg in [0, 180] else (w, h)
        avg_x_pct = round((sum(xs) / len(xs)) / rot_w * 100)
        avg_y_pct = round((sum(ys) / len(ys)) / rot_h * 100)
        face_center = (avg_x_pct, avg_y_pct)
        
    return {
        'path': img_path,
        'filename': os.path.basename(img_path),
        'original_size': (w, h),
        'faces_at_0': faces_0,
        'best_deg': best_deg,
        'best_faces': max_faces,
        'all_counts': {d: results[d][0] for d in [0, 90, 180, 270]},
        'face_center': face_center
    }

if __name__ == '__main__':
    images = [f for f in os.listdir(pub_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    print(f"Analyzing {len(images)} images in {pub_dir}...")
    
    rotated_candidates = []
    face_centers = {}
    
    for idx, img_file in enumerate(images):
        full_path = os.path.join(pub_dir, img_file)
        res = analyze_photo(full_path)
        if res:
            if res['face_center']:
                face_centers[res['filename']] = res['face_center']
            if res['best_deg'] != 0:
                rotated_candidates.append(res)
                print(f"[ROTATED DETECTED] {res['filename']} needs {res['best_deg']}° CW rotation! (0°: {res['faces_at_0']} faces, {res['best_deg']}°: {res['best_faces']} faces)")
    
    print("\n--- Summary of Rotated Images ---")
    for r in rotated_candidates:
        print(f"File: {r['filename']}, Rotate CW: {r['best_deg']}°, Face center after rot: {r['face_center']}")
        
    print(f"\nTotal rotated images detected: {len(rotated_candidates)}")
