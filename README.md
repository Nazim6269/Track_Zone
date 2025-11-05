# 🛰️ Track Zone

A **location and timezone tracker** built with **React** and **Tailwind CSS**.  
This app detects your current geographic location using the browser’s **Geolocation API** and displays **real-time clocks** for multiple global timezones such as **GMT, PST, UTC, and EDT**.

![Track Zone Preview](https://track-zone-react.vercel.app/)

---

## 🚀 Features

- 🗺️ **Live Location Tracking** – Uses the browser’s Geolocation API to get your current position  
- ⏰ **Multiple Timezones** – Displays real-time clocks for GMT, UTC, PST, EDT, and more  
- 🧭 **Interactive Map (Optional)** – View your position on an embedded map (e.g., via Leaflet or Google Maps API)  
- 🕹️ **Auto-refreshing Clock** – Updates every second without page reload  
- 🌙 **Dark/Light Mode** – Switch between themes using context or Tailwind  
- 📱 **Responsive Design** – Works seamlessly across mobile, tablet, and desktop  
- 💾 **Local Storage Support** – Saves user’s selected timezones and preferences  

---

## 🧰 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Framework** | React 19 |
| **Styling** | Tailwind CSS |
| **APIs** | Geolocation API, Intl.DateTimeFormat |
| **State Management** | Context API / useState hooks |
| **Optional Mapping** | Leaflet.js or Google Maps Embed |
| **Hosting** | Vercel / Netlify |

---

## ⚙️ Installation

### Clone the repository
```bash
git clone https://github.com/Nazim6269/track-zone.git
cd track-zone
```

## Install Dependencies
```
yarn install
# or
npm install
```

## Run development Server
```
yarn start
# or
npm start
```

## Open Your Browser
Visit: [http://localhost:3000](http://localhost:3000)

## Project Structure
```
.
├── src/
│   ├── components/
│   │   ├── ClockCard.tsx        # Displays a live clock for a given timezone
│   │   ├── LocationInfo.tsx     # Shows latitude, longitude, and region info
│   │   ├── ThemeToggle.tsx      # Dark/light mode toggle button
│   │   └── MapView.tsx          # (Optional) Renders map view with current location
│   │
│   ├── pages/
│   │   ├── Home.tsx             # Main dashboard with clocks and location info
│   │   └── index.tsx            # Root file
│   │
│   ├── context/
│   │   └── ThemeContext.tsx     # Context for dark/light theme
│   │
│   ├── hooks/
│   │   └── useCurrentTime.ts    # Custom hook to update live time
│   │
│   ├── utils/
│   │   └── timezoneList.ts      # Predefined timezone data and helper functions
│   │
│   ├── assets/                  # Icons, images, etc.
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles (Tailwind)
│
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json
└── README.md
```
## Time zone displayed

| Abbreviation | Full Name                  | Example City |
| ------------ | -------------------------- | ------------ |
| GMT          | Greenwich Mean Time        | London       |
| UTC          | Coordinated Universal Time | Reykjavik    |
| PST          | Pacific Standard Time      | Los Angeles  |
| EST          | Eastern Standard Time      | New York     |
| IST          | India Standard Time        | Delhi        |
| JST          | Japan Standard Time        | Tokyo        |

## Screenshots
| Location Info                                | Multiple Clocks                         | Dark Mode                                 |
| -------------------------------------------- | --------------------------------------- | ----------------------------------------- |
| ![Location](https://your-location-image.com) | ![Clocks](https://your-clock-image.com) | ![Dark](https://your-dark-mode-image.com) |

## 💡 Key Functionalities

- Detects your current latitude and longitude using the browser’s Geolocation API
- Converts UTC time to multiple regional timezones using JavaScript’s Intl API
- Uses React state and custom hooks for live updates
- Automatically stores user preferences (e.g., theme and selected zones) in local storage
- Built with reusable components and clean modular design

## 🔮 Future Enhancements

- 🌎 Add interactive map (Leaflet.js or Google Maps API)
- 🧭 Integrate reverse geocoding to display city/country names
- 🧠 Allow custom timezone selection from a dropdown
- 🌐 Add weather information using OpenWeather API
- 💬 Add language/localization support

## 💻 Deployment

Deployed on Vercel for instant global access.

🔗 Live Demo: [https://your-trackzone-demo.vercel.app](https://track-zone-react.vercel.app/)

## 👨‍💻 Author

Nazim Uddin
Front-End Developer | React & Next.js Enthusiast

- 🌐 [Portfolio](https://portfolio-nextjs-one-tau.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/nazim-uddin-23a93a216/)
- 🐙 [GitHub](https://github.com/Nazim6269)
