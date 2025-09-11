// Simple Image Modal using HTML dialog element

export class ImageModal {
  private dialog: HTMLDialogElement;
  private modalImage: HTMLImageElement;
  private closeButton: HTMLButtonElement;

  constructor() {
    this.createModal();
    this.bindEvents();
  }

  private createModal(): void {
    // Create dialog element
    this.dialog = document.createElement('dialog');
    this.dialog.className = 'p-0 border-0 bg-transparent w-screen h-screen m-auto backdrop:bg-black/80 backdrop:backdrop-blur';
    this.dialog.setAttribute('aria-label', 'Image modal');

    // Create modal content
    this.dialog.innerHTML = `
      <div class="flex items-center justify-center h-full bg-transparent">
        <div class="relative">
          <button class="absolute top-0 right-6 z-20 bg-white hover:bg-gray-100 border-0 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer text-gray-800 transition-all duration-200 hover:scale-110 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 shadow-lg" type="button" aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img class="max-w-[75vw] max-h-[75vh] object-contain rounded shadow-2xl" src="" alt="" loading="lazy">
        </div>
      </div>
    `;

    // Cache references
    this.modalImage = this.dialog.querySelector('img') as HTMLImageElement;
    this.closeButton = this.dialog.querySelector('button') as HTMLButtonElement;

    // Append to body
    document.body.appendChild(this.dialog);
  }

  private bindEvents(): void {
    // Close button click
    this.closeButton.addEventListener('click', () => this.close());

    // Close on backdrop click
    this.dialog.addEventListener('click', (e) => {
      if (e.target === this.dialog) {
        this.close();
      }
    });

    // Close on Escape key
    this.dialog.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });

    // Bind to all images with data-modal attribute
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.matches('img[data-modal]')) {
        e.preventDefault();
        this.open(target as HTMLImageElement);
      }
    });
  }

  public open(image: HTMLImageElement): void {
    const src = image.dataset.modalSrc || image.src;
    const alt = image.alt || '';

    this.modalImage.src = src;
    this.modalImage.alt = alt;

    this.dialog.showModal();

    // Focus the close button for accessibility
    this.closeButton.focus();
  }

  public close(): void {
    this.dialog.close();
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ImageModal();
  });
} else {
  new ImageModal();
}