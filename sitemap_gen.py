import os
import datetime

# Define the domain and the folder containing HTML files
DOMAIN = "https://lpx-bern.github.io/info"
HTML_FOLDER = "./" 

# Generate sitemap entries
sitemap_entries = []
files = ['index','about'] # datasets
for file in files:
    file_path = os.path.join(HTML_FOLDER, file)
    last_modified = datetime.datetime.fromtimestamp(os.path.getmtime(file_path+'.html')).strftime('%Y-%m-%d')
    url_path = os.path.relpath(file_path, HTML_FOLDER).replace("\\", "/")  # Normalize for URLs
    url = f"{DOMAIN}/{url_path}"
    sitemap_entries.append(f"  <url>\n    <loc>{url}</loc>\n    <lastmod>{last_modified}</lastmod>\n  </url>")

# for domain
last_modified = datetime.datetime.now().date().strftime('%Y-%m-%d')
url = f"{DOMAIN}"
sitemap_entries.append(f"  <url>\n    <loc>{url}</loc>\n    <lastmod>{last_modified}</lastmod>\n  </url>")

# Create the sitemap.xml content
sitemap_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(sitemap_entries)}
</urlset>"""

# Save the updated sitemap.xml
with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_content)

print("Sitemap updated successfully")
