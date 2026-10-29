# Media library
## Folder convention
```text
public/
└── media/
    ├── photography/
    │   ├── hero.jpg
    │   ├── retrato-marcos.jpg
    │   ├── memoria-san-miguel.jpg
    │   └── frames/
    │       ├── frame-01.png
    │       ├── frame-02.jpg
    │       ├── frame-03.png
    │       └── frame-04.jpg
    └── video/
        └── coberturas/
            ├── noroccidente-fest-2025.mp4
            ├── exporferis-ganadera-2026.mp4
            └── ego-gel-2026.mp4
```
Use semantic filenames for identifiable projects and numbered filenames only for ordered archive sequences. Keep original masters outside `public/` when possible; only web-ready files should ship with the static export. The PNG archive frames are currently large and should be converted to optimized WebP/AVIF derivatives after visual quality review. Do not add generated crops or pretend an unreviewed derivative is the original.
