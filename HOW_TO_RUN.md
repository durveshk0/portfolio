# How to Run Your Portfolio

## Quick Start (Manual Method)

### Step 1: Open Terminal/PowerShell
- Press `Windows Key + X`
- Select "Windows PowerShell" or "Terminal"
- Navigate to your portfolio folder:
  ```powershell
  cd "C:\Users\DURVESH KANADE\OneDrive\Desktop\portfolio"
  ```

### Step 2: Start the Development Server
Run this command:
```powershell
npm run dev
```

### Step 3: Wait for the Server to Start
You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### Step 4: Open in Browser
- The server should automatically open your browser
- If not, manually go to: **http://localhost:3000**
- Or try: **http://localhost:5173** (Vite's default port)

## Alternative: If Port 3000 is Busy

If you see an error about port 3000 being in use:

1. **Option A**: Use a different port
   - Edit `vite.config.js`
   - Change `port: 3000` to `port: 5173` (or any other port)

2. **Option B**: Kill the process using port 3000
   ```powershell
   netstat -ano | findstr :3000
   taskkill /PID <PID_NUMBER> /F
   ```

## Troubleshooting

### If you see "Missing script: dev"
```powershell
npm install
npm run dev
```

### If you see module errors
```powershell
rm -r node_modules
npm install
npm run dev
```

### If the page is blank
- Check the browser console (F12) for errors
- Make sure all files are saved
- Try hard refresh: `Ctrl + Shift + R`

### If nothing happens
1. Check if Node.js is installed: `node --version`
2. Check if npm is installed: `npm --version`
3. Reinstall dependencies: `npm install`

## What You Should See

Once running, you'll see:
- ✅ Hero section with your name
- ✅ About Me section
- ✅ Skills section
- ✅ Projects section
- ✅ Resume section
- ✅ Contact section
- ✅ Dark mode toggle (top right)

## Stop the Server

Press `Ctrl + C` in the terminal to stop the server.

---

**Note**: The server must be running for you to see the portfolio. Keep the terminal window open while viewing the site.

