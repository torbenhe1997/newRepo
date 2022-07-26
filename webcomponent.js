(function () {

    let template = document.createElement("template");
    template.innerHTML = `
    <style>
    :host {
    border-radius: 25px;
    border-width: 30px;
    border-color: black;
    border-style: solid;
    display: block;
    } </style> 
    `;

    class HelloWorld1 extends HTMLElement {


        constructor() {
            super();
            this._shadowRoot = this.attachShadow({
                mode: "open"
            });
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;


        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback() {



        }

        //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback() {

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function first
        onCustomWidgetBeforeUpdate(oChangedProperties) {



        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(oChangedProperties) {

        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy() {}


        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){
            redraw()
        }
        */

        redraw() {}
    }
    customElements.define('com-sap-sample-helloworld1', HelloWorld1);
})();