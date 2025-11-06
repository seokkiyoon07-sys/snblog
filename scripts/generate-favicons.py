#!/usr/bin/env python3
"""
Generate favicon files from sn_logo.png
"""

from PIL import Image
import os

# Paths
script_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(script_dir)
public_dir = os.path.join(project_root, 'public')
source_image = os.path.join(public_dir, 'sn_logo.png')

# Favicon sizes
sizes = {
    'favicon-16x16.png': (16, 16),
    'favicon-32x32.png': (32, 32),
    'apple-touch-icon.png': (180, 180),
    'android-chrome-192x192.png': (192, 192),
    'android-chrome-512x512.png': (512, 512),
}

def generate_favicons():
    """Generate all favicon sizes from source image"""
    print(f"Loading source image: {source_image}")

    # Open source image
    img = Image.open(source_image)
    print(f"Source image size: {img.size}")

    # Generate each size
    for filename, size in sizes.items():
        output_path = os.path.join(public_dir, filename)
        print(f"Generating {filename} ({size[0]}x{size[1]})...")

        # Resize with high-quality antialiasing
        resized = img.resize(size, Image.Resampling.LANCZOS)

        # Save
        resized.save(output_path, 'PNG', optimize=True)
        print(f"  [OK] Saved to {output_path}")

    print("\n[SUCCESS] All favicons generated successfully!")

if __name__ == '__main__':
    generate_favicons()
