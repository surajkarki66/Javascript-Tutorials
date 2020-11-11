import { HasFormatter } from "../interfaces/HasFormatter.js";

class ListTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasFormatter, heading: string, position: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");

    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    if (position === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

export default ListTemplate;
