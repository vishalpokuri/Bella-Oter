## Bella Otér - Raven Body Profile

### Overview

> I created it a mobile-first, single-page experience built to simulate the first step of the **Raven Body Profile** — Bella Otér's loungewear discovery flow.
>
> The goal of this build was to create a **visually intuitive and soothing** interface that reflects Bella Otér’s brand philosophy.

---

### Design Philosophy

#### Selection of Colors

> I used a soft neutral base background (`#ededed`) to reflect a sense of calm and minimalism — a canvas that doesn’t distract, but lets emotions breathe.
>
> For typography and accents, I opted for muted light brown tones to stay grounded in earthy warmth, aligning with Bella Otér’s emotional tone: **gentle, grounded, self-connected**. These tones evoke _natural materials_ like sand, silk, and clay.

#### Main background

> I used a **gradient background image**, with a **noisy grainy overlay effect** incorporated with some tints of warm ivory and subtle light pink (muted shades) over the gradient to emphasize the gentleness, soft and calming UI

---

### Selection Options

> Instead of using default buttons or radio inputs, I wanted to **elevate the emotional storytelling** by representing each feeling — _Grounding, Softness, Energy, Freedom_ — with a **visual moodboard-style block**.
>
> Each block uses a AI-generated image (some are stock images) to **visualize the emotion depicted**, helping the user connect emotionally rather than cognitively.  
> This helps shift the quiz from “selecting an option” to “recognizing a feeling.”

---

### Product Result Reveal Logic

> Upon selecting an option, the question fades away and a _matching archetype_ result is revealed — complete with a name, product, description, and fabric type.
>
> Here I used soft transitions and timed fades to preserve emotional flow.

---

### Welcome back global Blimp

> I have used a fixed height, full width welcome blimp, which I initially created as a global information notifier. This is placed on the top of the application where user can notice it without missing out.

---

### Component & Tech Stack

| Feature                 | Stack/Method Used                                                               |
| ----------------------- | ------------------------------------------------------------------------------- |
| Framework               | [React.js](https://reactjs.org/)                                                |
| Styling                 | [TailwindCSS](https://tailwindcss.com/), CSS                                    |
| State Management        | `useState` for flow logic, `localStorage` for optional “Welcome Back” message   |
| Transitions & Animation | CSS, TailwindCSS, framer-motion                                                 |
| Fonts                   | Google Fonts: `Playfair Display` (for archetype & headings), `Inter` (for body) |

---

### Bonus Features Implemented

- **LocalStorage** saves user’s last selection and shows a “Welcome back” message

- **Componentized architecture** (e.g., `QuizSection`, `ResultSection`, `HeartIcons`, `WelcomeBlimp`)

- **Responsive layout** for both mobile and desktop, tested across only these 2 breakpoints

---

### 📂 Folder Structure

```bash
src/
  ├── assets/              # Images used for mood/option blocks
  ├── components/          # React components (Sections, Containers, Blimp etc.)
  ├── data/                # Example data to populate buttons and images.
  ├── Svg/                 # Svg JSX components
  ├── types/               # Global types for exporting
  ├── App.tsx              # Main page flow logic
  ├── index.html
  └── main.tsx

```

---

### Final Thoughts

> Tried to implement Dark mode switching feature, my initial intuition would be taking a **inverted dark gradient image with the inversion of muted colors** which complement on the Dark mode, but with some limitations with my GPT image generation, I was unable to implement it properly.

---
