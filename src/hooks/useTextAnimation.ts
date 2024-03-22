const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = 0;

const useTextAnimation = (e: HTMLElement) => {
  let i = 0;
  const initialText = e.innerText;
  

  interval = setInterval(() => {
    e.innerText = initialText
      .split("")
      .map((_, index) => {
        if (index < i) {
          return initialText[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (i >= e.innerText.length) {
      clearInterval(interval);
    }
    i += 1;
  }, 100);
};
export default useTextAnimation;
