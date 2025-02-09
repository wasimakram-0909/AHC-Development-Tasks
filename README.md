## Project info

**URL**: https://imaginative-fudge-a9e426.netlify.app/
**URL**: https://ahctask.netlify.app/login

## How can I edit and run the project locally

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <https://github.com/wasimakram-0909/AHC-Development-Tasks.git>

# Step 2: Navigate to the project directory.
cd <AHC-Development-Tasks>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.


## Techstack used in this project

Following techstack used to complete the task.

- React
- TypeScript
- Supabase // for mock apis
- Vite
- shadcn-ui
- Tailwind CSS

## APIs Info:
below are the apis used in the app
 - Login api/ Token API
 - Products API
 - Logout API



 Login API Curl

 ```
 curl 'https://tmnpkvhzhyfhdhsgbmkf.supabase.co/auth/v1/token?grant_type=password' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbnBrdmh6aHlmaGRoc2dibWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDQ4MDQsImV4cCI6MjA1NDUyMDgwNH0.tRH9y5Qg00LZLa2uhmiYhokk3UKEKBgagKcUi0PnAnE' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbnBrdmh6aHlmaGRoc2dibWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDQ4MDQsImV4cCI6MjA1NDUyMDgwNH0.tRH9y5Qg00LZLa2uhmiYhokk3UKEKBgagKcUi0PnAnE' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'origin: https://ahctask.netlify.app' \
  -H 'priority: u=1, i' \
  -H 'referer: https://ahctask.netlify.app/' \
  -H 'sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36' \
  -H 'x-client-info: supabase-js-web/2.48.1' \
  -H 'x-supabase-api-version: 2024-01-01' \
  --data-raw '{"email":"wasimakram.baduga@gmail.com","password":"123456","gotrue_meta_security":{}}'
 
 ```

 Products List API curl

 ```
curl 'https://tmnpkvhzhyfhdhsgbmkf.supabase.co/rest/v1/products?select=*&limit=6' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'accept-profile: public' \
  -H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbnBrdmh6aHlmaGRoc2dibWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDQ4MDQsImV4cCI6MjA1NDUyMDgwNH0.tRH9y5Qg00LZLa2uhmiYhokk3UKEKBgagKcUi0PnAnE' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkFDSURSYjdkYXZ6ZEJseHQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3RtbnBrdmh6aHlmaGRoc2dibWtmLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJkNzdiMmFmZi04ODBkLTQ4MDAtOTU5Yi04YzYxY2IyNmQyOGQiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM5MTExNDM3LCJpYXQiOjE3MzkxMDc4MzcsImVtYWlsIjoid2FzaW1ha3JhbS5iYWR1Z2FAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6Indhc2ltYWtyYW0uYmFkdWdhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJzdF9uYW1lIjoid2FzaW0iLCJsYXN0X25hbWUiOiJha3JhbSIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiZDc3YjJhZmYtODgwZC00ODAwLTk1OWItOGM2MWNiMjZkMjhkIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MzkxMDc4Mzd9XSwic2Vzc2lvbl9pZCI6IjQ1ZGMyMzFjLWI5NDAtNGJkZS1hZDBkLTc1NzdhYmFiOWFmMCIsImlzX2Fub255bW91cyI6ZmFsc2V9.icIRRdhBfpDucoDVIqBwonAAwlxrg9Bv9ruz1YkORM0' \
  -H 'origin: https://ahctask.netlify.app' \
  -H 'priority: u=1, i' \
  -H 'referer: https://ahctask.netlify.app/' \
  -H 'sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36' \
  -H 'x-client-info: supabase-js-web/2.48.1'

 ```

 Logout API curl

 ```
 curl 'https://tmnpkvhzhyfhdhsgbmkf.supabase.co/auth/v1/logout?scope=global' \
  -X 'POST' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbnBrdmh6aHlmaGRoc2dibWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDQ4MDQsImV4cCI6MjA1NDUyMDgwNH0.tRH9y5Qg00LZLa2uhmiYhokk3UKEKBgagKcUi0PnAnE' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkFDSURSYjdkYXZ6ZEJseHQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3RtbnBrdmh6aHlmaGRoc2dibWtmLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJkNzdiMmFmZi04ODBkLTQ4MDAtOTU5Yi04YzYxY2IyNmQyOGQiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM5MTExNzIzLCJpYXQiOjE3MzkxMDgxMjMsImVtYWlsIjoid2FzaW1ha3JhbS5iYWR1Z2FAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6Indhc2ltYWtyYW0uYmFkdWdhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJzdF9uYW1lIjoid2FzaW0iLCJsYXN0X25hbWUiOiJha3JhbSIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiZDc3YjJhZmYtODgwZC00ODAwLTk1OWItOGM2MWNiMjZkMjhkIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MzkxMDgxMjN9XSwic2Vzc2lvbl9pZCI6ImU2NzU2NjVjLWRmNjItNGZjZi05MzIyLThlZTAyZTZjODI3NCIsImlzX2Fub255bW91cyI6ZmFsc2V9.Cl1pohjPqWcbE-1lSRhtOumh--gAPJMcGaOq4PYdhXg' \
  -H 'content-length: 0' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'origin: https://ahctask.netlify.app' \
  -H 'priority: u=1, i' \
  -H 'referer: https://ahctask.netlify.app/' \
  -H 'sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36' \
  -H 'x-client-info: supabase-js-web/2.48.1' \
  -H 'x-supabase-api-version: 2024-01-01'
 ```




## Developer Info
- Name: Wasim Akram
- Contact: +91 9573575873 (WhatsApp)
- LinkedIn: https://www.linkedin.com/in/wasim-akram-11864a150
- Email: wasimakram.baduga@gmail.com
