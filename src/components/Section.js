
export class Section {
    constructor({ items,  renderer}, container) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = container;
    }

    addItem(card) {
      this._container.prepend(card);
    }

    renderItems() {
      this._renderedItems.forEach((item) => {
       this._renderer(item);
        });
      };
    };
    