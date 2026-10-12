import os, hashlib, re

pub_dir = r"c:\Users\Vishu\Documents\antigravity\lucid-galileo\public\images\school"
src_dir = r"c:\Users\Vishu\Documents\antigravity\lucid-galileo\src"

def get_hash(path):
    h = hashlib.md5()
    with open(path, 'rb') as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

# Collect all images in src
used_in_code = []
for root, _, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.ts', '.tsx')):
            with open(os.path.join(root, f), 'r', encoding='utf-8') as fp:
                content = fp.read()
                matches = re.findall(r'/images/school/([^"\'\s>]+)', content)
                for m in matches:
                    used_in_code.append((m, os.path.relpath(os.path.join(root, f), src_dir)))

print(f"Total image references found in src: {len(used_in_code)}")

# Check hashes of all referenced images
hash_to_names = {}
name_to_hash = {}
missing = []

for name, source_file in used_in_code:
    p = os.path.join(pub_dir, name)
    if not os.path.exists(p):
        missing.append((name, source_file))
        continue
    md5 = get_hash(p)
    name_to_hash[name] = md5
    if md5 not in hash_to_names:
        hash_to_names[md5] = []
    hash_to_names[md5].append((name, source_file))

print(f"Unique files by name: {len(name_to_hash)}")
print(f"Unique files by MD5 hash: {len(hash_to_names)}")
if missing:
    print("MISSING FILES:", missing)

# Check for duplicate hashes
duplicates = {k: v for k, v in hash_to_names.items() if len(v) > 1}
if duplicates:
    print("\n[WARNING] Duplicate images detected:")
    for md5, occurrences in duplicates.items():
        print(f"  Hash {md5}:")
        for n, sf in occurrences:
            print(f"    - {n} (in {sf})")
else:
    print("\n[SUCCESS] Exactly ZERO duplicate images across the entire site! Every image is 100% unique!")
