const inview = ({
  triggerElement = ".target",
  setClass = "inview",
  once = false,
  thresholds = [0.5, 1],
} = {}) => {
  // Select all the elements to observe
  const targetElements = document.querySelectorAll(triggerElement);

  // Create an observer instance for each element
  targetElements.forEach((targetElement) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targetElement.classList.add(setClass);
          } else {
            if (!once) {
              targetElement.classList.remove(setClass);
            }
          }
        });
      },
      { threshold: thresholds }
    );
    observer.observe(targetElement);
  });
};
