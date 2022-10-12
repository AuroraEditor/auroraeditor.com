class AuroraNavMultiButton {
    constructor(id) {
        this.id = id;
        this.button = document.getElementById(this.id);
        this.buttonSibling = this.button.nextElementSibling;
        this.isClicked = false;
    }
    init = () => {
        this.button.addEventListener("click", (evt) => {
            evt.preventDefault();
            this.isClicked = !this.isClicked;
            if (this.isClicked) {
                this.toggleVisible();
                document.addEventListener("click", this.hideOnClickOutside);
            } else {
                this.toggleVisible();
                document.removeEventListener("click", this.hideOnClickOutside, false);
            }
        });
    };
    toggleVisible = () => {
        this.buttonSibling.classList.toggle("button-multi-option-active");
    };
    hideOnClickOutside = (evt) => {
        const target = evt.target;
        if (!this.button.parentElement.contains(target)) {
            this.toggleVisible();
            this.isClicked = !this.isClicked;
            document.removeEventListener("click", this.hideOnClickOutside, false);
        }
    };
}

//Create a btn variable for each button-multi on page
//call the init()
const btn1 = new AuroraNavMultiButton("button-multi-1");
btn1.init();
