import { useEffect } from "react";

const BubbleText = ({children}) => {
    useEffect(() => {
      const spans = document.querySelectorAll(".hover-text span");
  
      spans.forEach((span) => {
        span.addEventListener("mouseenter", function () {
          this.style.fontWeight = "900";
          ;
  
          const leftNeighbor = this.previousElementSibling;
          const rightNeighbor = this.nextElementSibling;
  
          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "500";
            leftNeighbor.style.color = "#00A896";
          }
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "500";
            rightNeighbor.style.color = "#00A896";
          }
        });
  
        span.addEventListener("mouseleave", function () {
          this.style.fontWeight = "400";
          this.style.color = "#00A896";
  
          const leftNeighbor = this.previousElementSibling;
          const rightNeighbor = this.nextElementSibling;
  
          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "400";
            leftNeighbor.style.color = "#00A896";
          }
  
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "100";
            rightNeighbor.style.color = "#00A896";
          }
        });
      });
    }, []);
  
    return (
      <h2 className="hover-text text-center text-4xl lg:text-5xl">
        <Text>{children}</Text>
      </h2>
    );
  };

  export default BubbleText;


const Text = ({ children }) => {
return (
    <>
    {children.split("").map((child, idx) => (
        <span
        style={{
            transition: "0.35s font-weight, 0.35s color",
        }}
        key={idx}
        >
        {child}
        </span>
    ))}
    </>
    )
}