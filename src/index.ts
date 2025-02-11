class Tooltip {
  private tooltipElement: HTMLElement;

  constructor() {
    this.tooltipElement = document.createElement("div");
    this.tooltipElement.style.position = "absolute";
    this.tooltipElement.style.backgroundColor = "black";
    this.tooltipElement.style.color = "orange";
    this.tooltipElement.style.padding = "5px";
    this.tooltipElement.style.borderRadius = "3px";
    this.tooltipElement.style.display = "none";
    document.body.appendChild(this.tooltipElement);
  }

  showTooltip(text: string, targetElement: HTMLElement) {
    this.tooltipElement.textContent = text;
    this.tooltipElement.style.display = "block";

    const rect = targetElement.getBoundingClientRect();
    this.tooltipElement.style.top = `${rect.bottom + window.scrollY}px`;
    this.tooltipElement.style.left = `${rect.left + window.scrollX}px`;
  }

  hideTooltip() {
    this.tooltipElement.style.display = "none";
  }
}

export default Tooltip;
