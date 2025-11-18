# How to Start the Project

## Quick Start

1. **Open Terminal/Command Prompt** in the project folder

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:3000
   ```

## If Port 3000 is Busy

If you see an error about port 3000 being in use, use a different port:

```bash
npm run dev -- -p 3001
```

Then open: `http://localhost:3001`

## Troubleshooting

### Project Not Opening?

1. **Check if server is running**: Look for this message in terminal:
   ```
   ✓ Ready - started server on 0.0.0.0:3000
   ```

2. **Check browser console**: Press `F12` and look for errors in Console tab

3. **Clear browser cache**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

4. **Restart the server**: 
   - Press `Ctrl+C` to stop
   - Run `npm run dev` again

### Build for Production

```bash
npm run build
npm start
```

## Notes

- The project uses mock data by default (no API configuration needed)
- All features should work: catalog, search, cart, favorites
- If you want to use a real API, set `NEXT_PUBLIC_API_BASE_URL` in `.env.local`

