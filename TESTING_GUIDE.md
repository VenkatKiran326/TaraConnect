# TaraConnect - Complete Testing Guide

## 🚀 Quick Start

### 1. **Start Backend Server**
```bash
cd d:\FullStack\JAVA_Full_Stack\TaraConnect\FE-Reactjs\server
npm run dev
```
**Expected Output:**
```
Server running on port 5000
MongoDB connected
```

### 2. **Start Frontend (in another terminal)**
```bash
cd d:\FullStack\JAVA_Full_Stack\TaraConnect\FE-Reactjs
npm run dev
```
**Expected Output:**
```
  VITE v7.3.1  ready in 500 ms
  ➜  Local:   http://localhost:5173/
```

---

## 📍 Testing URLs

| Component | URL | Purpose |
|-----------|-----|---------|
| **Frontend** | http://localhost:5173 | Main app |
| **Backend API** | http://localhost:5000 | API endpoints |
| **Health Check** | http://localhost:5000 | Should return `{ msg: 'API running' }` |

---

## 🧪 Test Data & Sample Users

### **Test User 1: Brand Owner**
```json
{
  "name": "John Smith",
  "email": "brand@example.com",
  "password": "Test@123456",
  "role": "brand"
}
```

### **Test User 2: Influencer**
```json
{
  "name": "Sarah Johnson",
  "email": "influencer@example.com",
  "password": "Test@123456",
  "role": "influencer"
}
```

### **Test User 3: Another Brand**
```json
{
  "name": "Nike Marketer",
  "email": "nike@example.com",
  "password": "Nike@123",
  "role": "brand"
}
```

---

## 📋 Complete Testing Process

### **Phase 1: Authentication Testing**

#### Step 1A: Sign Up as Brand
1. Go to http://localhost:5173
2. Click **"Signup"** button
3. Fill form:
   - **Name**: John Smith
   - **Email**: brand@example.com
   - **Password**: Test@123456
   - **Role**: Select "Brand"
4. Click **"Sign Up"**
5. ✅ Should redirect to Brand Dashboard
6. **Expected Data Stored:**
   ```json
   {
     "_id": "auto-generated-id",
     "name": "John Smith",
     "email": "brand@example.com",
     "role": "brand",
     "createdAt": "2026-05-27T..."
   }
   ```

#### Step 1B: Sign Up as Influencer
1. Go to http://localhost:5173
2. Click **"Signup"**
3. Fill form:
   - **Name**: Sarah Johnson
   - **Email**: influencer@example.com
   - **Password**: Test@123456
   - **Role**: Select "Influencer"
4. Click **"Sign Up"**
5. ✅ Should redirect to Influencer Dashboard
6. **Expected Data Stored:**
   ```json
   {
     "_id": "auto-generated-id",
     "name": "Sarah Johnson",
     "email": "influencer@example.com",
     "role": "influencer",
     "createdAt": "2026-05-27T..."
   }
   ```

#### Step 1C: Log Out
1. Click **"Logout"** in navbar
2. ✅ Should return to Landing page
3. ✅ Navbar should show "Signin" and "Signup" buttons

#### Step 1D: Sign In
1. Click **"Signin"**
2. Fill form:
   - **Email**: brand@example.com
   - **Password**: Test@123456
3. Click **"Sign In"**
4. ✅ Should redirect to Brand Dashboard
5. ✅ Should show "Welcome, John Smith"

---

### **Phase 2: Brand Management**

#### Step 2A: Create Brand Profile (as Brand User)
1. Sign in with: **brand@example.com** / **Test@123456**
2. Go to **"Brands"** page (from navbar)
3. Scroll to **"Create a new brand"** form
4. Fill form:
   - **Brand name**: Nike Global
   - **Website**: https://www.nike.com
   - **Description**: Leading sports brand specializing in athletic wear and footwear
5. Click **"Create Brand"**
6. ✅ Brand should appear in the list above
7. **Expected Data Stored:**
   ```json
   {
     "_id": "auto-generated-id",
     "name": "Nike Global",
     "website": "https://www.nike.com",
     "description": "Leading sports brand specializing in athletic wear and footwear",
     "owner": "John Smith's ID",
     "createdAt": "2026-05-27T..."
   }
   ```

#### Step 2B: Create Another Brand
1. Still on Brands page (logged in as Brand user)
2. Fill form again:
   - **Brand name**: Adidas
   - **Website**: https://www.adidas.com
   - **Description**: Global athletic apparel and footwear company
3. Click **"Create Brand"**
4. ✅ Both brands should show in list

#### Step 2C: View All Brands
1. Go to **"Brands"** page (any user)
2. Scroll down to see **"Brand Cards"** section
3. ✅ Should display:
   - Brand image (placeholder)
   - Brand name
   - Website URL
   - Description
   - Owner name
   - "View Profile" button
   - "Share Interest" button
4. Each card should show created brands

---

### **Phase 3: Influencer Management**

#### Step 3A: Create Influencer Profile (as Influencer User)
1. Sign Out (if logged in as Brand)
2. Sign In with: **influencer@example.com** / **Test@123456**
3. Go to **"Influencers"** page
4. Scroll to **"Create an influencer profile"** form
5. Fill form:
   - **Name**: Sarah Johnson
   - **Handle**: @sarahjohnson
   - **Bio**: Fashion & lifestyle influencer with 500K followers
   - **Categories**: Fashion, Lifestyle, Travel
6. Click **"Create Profile"**
7. ✅ Profile should appear in the influencer cards below
8. **Expected Data Stored:**
   ```json
   {
     "_id": "auto-generated-id",
     "name": "Sarah Johnson",
     "handle": "@sarahjohnson",
     "bio": "Fashion & lifestyle influencer with 500K followers",
     "categories": ["Fashion", "Lifestyle", "Travel"],
     "userId": "influencer-user-id",
     "createdAt": "2026-05-27T..."
   }
   ```

#### Step 3B: Create Another Influencer Profile
1. Create another test user first (different email)
2. Sign up as: **tech@example.com** / **Test@123456** (role: Influencer)
3. Go to Influencers page
4. Fill form:
   - **Name**: Tech Reviewer
   - **Handle**: @techguru
   - **Bio**: Tech gadget reviews and tutorials
   - **Categories**: Tech, Gadgets, Electronics
5. Click **"Create Profile"**
6. ✅ Should see multiple influencer cards

#### Step 3C: View All Influencers
1. Go to **"Influencers"** page
2. Scroll down to see all influencer cards
3. ✅ Each card should show:
   - Influencer photo (placeholder)
   - Name
   - Categories (comma-separated)
   - Handle (@username)
   - Bio
   - Social media icons (Facebook, Instagram, Twitter, YouTube)
   - "View Profile" button
   - "Invite to Collaborate" button

---

### **Phase 4: Navigation & Role-Based Access**

#### Step 4A: Brand User Navigation
1. Sign in as: **brand@example.com**
2. Check navbar shows:
   - Home
   - Brands
   - Influencers
   - About
   - Footer with social links
   - **"John Smith"** (user name)
   - **"Logout"** button
3. Click each section
4. ✅ All pages should load correctly

#### Step 4B: Influencer User Navigation
1. Sign in as: **influencer@example.com**
2. Check navbar shows same options (role doesn't change menu)
3. Access both Brands and Influencers pages

#### Step 4C: Unauthenticated User
1. Log Out
2. Check navbar shows:
   - Home, Brands, Influencers, About
   - **"Signin"** button
   - **"Signup"** button
   - No user name or logout
3. Try accessing Brands page (should show info without edit form)
4. Try accessing Influencers page (should show info without edit form)

---

## 🔧 API Endpoints Reference

### **Authentication Endpoints**

#### Sign Up
```
POST http://localhost:5000/api/auth/signup
Content-Type: application/json

Body:
{
  "name": "John Smith",
  "email": "brand@example.com",
  "password": "Test@123456",
  "role": "brand"
}

Response:
{
  "token": "eyJhbGc...",
  "user": {
    "id": "user-id",
    "name": "John Smith",
    "email": "brand@example.com",
    "role": "brand"
  }
}
```

#### Sign In
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

Body:
{
  "email": "brand@example.com",
  "password": "Test@123456"
}

Response:
{
  "token": "eyJhbGc...",
  "user": {
    "id": "user-id",
    "name": "John Smith",
    "email": "brand@example.com",
    "role": "brand"
  }
}
```

### **Brand Endpoints**

#### Get All Brands
```
GET http://localhost:5000/api/brands
Response: [ { _id, name, website, description, owner, createdAt }, ... ]
```

#### Create Brand (Requires Auth Token)
```
POST http://localhost:5000/api/brands
Content-Type: application/json
Authorization: Bearer [token]

Body:
{
  "name": "Nike",
  "website": "https://nike.com",
  "description": "Sports brand"
}

Response: { _id, name, website, description, owner, createdAt }
```

### **Influencer Endpoints**

#### Get All Influencers
```
GET http://localhost:5000/api/influencers
Response: [ { _id, name, handle, bio, categories, userId, createdAt }, ... ]
```

#### Create Influencer (Requires Auth Token)
```
POST http://localhost:5000/api/influencers
Content-Type: application/json
Authorization: Bearer [token]

Body:
{
  "name": "Sarah Johnson",
  "handle": "@sarahjohnson",
  "bio": "Fashion influencer",
  "categories": ["Fashion", "Lifestyle"]
}

Response: { _id, name, handle, bio, categories, userId, createdAt }
```

---

## ✅ Testing Checklist

### **Authentication**
- [ ] Sign up as Brand
- [ ] Sign up as Influencer
- [ ] Sign in with correct credentials
- [ ] Sign in with wrong password (should fail)
- [ ] Sign in with non-existent email (should fail)
- [ ] Log out
- [ ] Token persists after refresh

### **Brands**
- [ ] Create brand as authenticated user
- [ ] Brand appears in list immediately
- [ ] View all brands (no auth required)
- [ ] Brand shows correct data (name, website, description, owner)
- [ ] Cannot create brand without login (shows alert)

### **Influencers**
- [ ] Create influencer profile as authenticated user
- [ ] Profile appears in list immediately
- [ ] View all influencer profiles (no auth required)
- [ ] Profile shows correct data (name, handle, bio, categories)
- [ ] Categories display properly (comma-separated)
- [ ] Cannot create profile without login (shows alert)

### **UI/Navigation**
- [ ] Navbar shows correct buttons based on auth state
- [ ] All page links work
- [ ] Landing page displays correctly
- [ ] Responsive design (check on mobile size)
- [ ] Error messages display properly

### **Data Validation**
- [ ] Cannot submit empty fields
- [ ] Email format validation works
- [ ] Password requirements enforced
- [ ] Duplicate email prevents signup

---

## 🐛 Troubleshooting

### Backend won't start
```
Error: listen EADDRINUSE: address already in use :::5000
→ Kill Node processes: Get-Process node | Stop-Process -Force
```

### "Cannot GET /" error
```
✅ Fixed - Root route added that returns { msg: 'API running' }
```

### Frontend can't connect to backend
1. Check backend is running on http://localhost:5000
2. Verify `.env` has: `VITE_API_URL=http://localhost:5000`
3. Check browser console for CORS errors

### Login token not persisting
```
Check: AuthContext.jsx uses localStorage
Verify localStorage is enabled in browser
```

---

## 📊 Expected Database Records After Testing

After completing all tests, MongoDB should have:

**Users Collection:**
- 1-3 User records (Brand and Influencer accounts)

**Brands Collection:**
- 2+ Brand records with owner references

**Influencers Collection:**
- 2+ Influencer records with user references

---

## 🎯 Next Steps After Testing

Once all tests pass:
1. Add dashboard statistics (total brands, influencers, connections)
2. Add search/filter functionality
3. Add messaging between brands and influencers
4. Add collaboration booking system
5. Add review/rating system
6. Deploy to production

---

## 📞 Support

If any feature fails:
1. Check browser console (F12) for errors
2. Check backend terminal for server errors
3. Check network tab in DevTools (F12)
4. Verify MongoDB is running
5. Clear browser cache and localStorage

