# CSS Grid Practice Project

This project demonstrates the most important CSS Grid concepts through practical examples.

## Concepts Covered

- `display: grid`
- `grid-template-columns`
- `fr` unit
- `gap`
- `repeat()`
- `minmax()`
- `auto-fit`
- `grid-column: span 2`
- Responsive design with media queries

---

## Layouts Included

### 1. Responsive Product Grid
```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

### 2. Two Column Layout
```css
grid-template-columns: 1fr 1fr;
```

### 3. Sidebar Layout
```css
grid-template-columns: 250px 1fr;
```

### 4. Card Layout
```css
grid-template-columns: repeat(3, 1fr);
```

### 5. Featured Card Layout
```css
.featured {
  grid-column: span 2;
}
```

---

## Project Structure

```text
css-grid-practice/
├── index.html
├── style.css
├── README.md
└── screenshot.png
```

---

## How to Run

1. Download the files.
2. Open `index.html` in a browser.
3. Resize the browser window to test responsiveness.

---

## Learning Highlights

### `1fr`
Represents one fraction of the available space.

### `gap`
Adds spacing between rows and columns.

### `repeat()`
Avoids repeating the same value multiple times.

### `minmax()`
Sets a minimum and maximum size for each column.

### `auto-fit`
Creates as many columns as fit automatically.

### `grid-column: span 2`
Makes an item occupy two columns.

---

## Responsive Pattern to Remember

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

This is one of the most commonly used CSS Grid patterns in real-world projects.

---

## Author

Created as part of CSS Grid practice and learning.