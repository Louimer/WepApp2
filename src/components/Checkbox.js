console.clear();

export default function Checkbox() {
  return (
    <>
      <svg>
        <defs>
          <linearGradient
            id="boxGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="25"
            y2="25"
          >
            <stop offset="0%" stop-color="blue" />
            <stop offset="100%" stop-color="lightblue" />
          </linearGradient>

          <linearGradient id="lineGradient">
            <stop offset="0%" stop-color="blue" />
            <stop offset="100%" stop-color="lightblue" />
          </linearGradient>

          <path
            id="todo__line"
            stroke="url(#lineGradient)"
            d="M21 12.3h168v0.1z"
          ></path>
          <path
            id="todo__box"
            stroke="url(#boxGradient)"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          ></path>
          <path
            id="todo__check"
            stroke="url(#boxGradient)"
            d="M10 13l2 2 5-5"
          ></path>
          <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
      </svg>

      <div className="todo-list">
        <label className="todo">
          <input className="todo__state" type="checkbox" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsxLink="http://www.w3.org/1999/xlink"
            className="todo__icon"
          >
            <use xlinkHref="#todo__line" className="todo__line"></use>
            <use xlinkHref="#todo__box" className="todo__box"></use>
            <use xlinkHref="#todo__check" className="todo__check"></use>
            <use xlinkHref="#todo__circle" className="todo__circle"></use>
          </svg>

          <input className="todo__state" type="checkbox" />

          <div className="todo__text"> </div>
        </label>
      </div>
    </>
  );
}
