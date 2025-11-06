# Quick Start Guide - DALL-E Product Image Generation

## 🚀 Get Started in 3 Steps

### Step 1: Set Your OpenAI API Key
```bash
export OPENAI_API_KEY=sk-your-api-key-here
```

### Step 2: Test with a Single Product
```bash
npm run generate-images -- --product-id=test-enan
```

### Step 3: Generate More Images
```bash
# For a specific category
npm run generate-images -- --category=injectable-steroids

# For all products (~$2.80 cost)
npm run generate-images -- --all
```

---

## 📝 Common Commands

### CLI Commands
```bash
# Show help and available options
npm run generate-images

# Generate for specific product
npm run generate-images -- --product-id=gh-endogenic

# Generate for category
npm run generate-images -- --category=peptides

# Generate all (70 products)
npm run generate-images -- --all
```

### REST API
```bash
# Start the dev server
npm run dev

# In another terminal:
# Generate single product image
curl -X POST http://localhost:5000/api/products/test-enan/generate-image

# Start batch generation (async)
curl -X POST http://localhost:5000/api/products/generate-all-images

# Get product with image
curl http://localhost:5000/api/products/test-enan
```

---

## 📚 Documentation Files

- **IMAGE_GENERATION.md** - Complete guide with setup, usage, and API details
- **EXAMPLES.ts** - Code examples for programmatic usage
- **IMPLEMENTATION_SUMMARY.md** - Technical implementation details
- **README (this file)** - Quick reference

---

## 💡 Tips

1. **Start Small**: Test with 1-2 products first
2. **Check Costs**: Each image costs ~$0.04, total for all products ~$2.80
3. **Monitor Progress**: Watch console logs during batch generation
4. **Image URLs**: Generated URLs are temporary - implement permanent storage for production

---

## ⚠️ Important Notes

- **API Key Required**: Set `OPENAI_API_KEY` environment variable
- **Temporary URLs**: DALL-E image URLs expire after some time
- **In-Memory Storage**: Generated URLs are stored in memory (lost on restart)
- **Rate Limiting**: 1-second delay between requests in batch mode

---

## 🐛 Troubleshooting

### "OPENAI_API_KEY environment variable is not set"
```bash
export OPENAI_API_KEY=your-key-here
# Or create .env file with: OPENAI_API_KEY=your-key
```

### "Failed to generate product image"
- Check your API key is valid
- Ensure you have credits in your OpenAI account
- Check network connectivity

### Build or type errors
```bash
npm run check  # Verify TypeScript
npm run build  # Test build process
```

---

## ✅ What Was Implemented

✅ DALL-E 3 integration with OpenAI SDK  
✅ Smart prompt engineering for pharmaceutical products  
✅ REST API endpoints for single and batch generation  
✅ CLI tool for easy command-line usage  
✅ Comprehensive error handling and logging  
✅ Rate limiting for batch operations  
✅ Full documentation and examples  
✅ Security scan passed (0 CodeQL alerts)  

---

## 🔗 Product Categories

Available categories for `--category` flag:
- `injectable-steroids` (20+ products)
- `hcg` (4 products)
- `oral-sarms` (18+ products)
- `peptides` (28+ products)

---

## 📞 Need Help?

1. Read **IMAGE_GENERATION.md** for detailed documentation
2. Check **EXAMPLES.ts** for code examples
3. Review **IMPLEMENTATION_SUMMARY.md** for technical details
4. Check server logs for error messages

---

**Ready to generate product images? Start with Step 1 above! 🎨**
