(function () {
    let tmpl = document.createElement('template');

             // creates a <table> element and a <tbody> element
      const tbl = document.createElement("table");
      const tblBody = document.createElement("tbody");

    class HelloWorld1 extends HTMLElement {


        constructor() {
            super();
            this._shadowRoot = this.attachShadow({
                mode: "open"
            });
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });
            this.props = {};
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback() {

            this._firstConnection = true;
            this.redraw();
        }

        //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback() {

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function first
        onCustomWidgetBeforeUpdate(oChangedProperties) {



        }

        set rowCount(newRowCount) {

            // creating all cells
            for (let newRowCount = 0; newRowCount < 2; newRowCount++) {
                // creates a table row
                const row = document.createElement("tr");

                for (let j = 0; j < 2; j++) {
                    // Create a <td> element and a text node, make the text
                    // node the contents of the <td>, and put the <td> at
                    // the end of the table row
                    const cell = document.createElement("td");
                    const cellText = document.createTextNode(`cell in row ${newRowCount}, column ${j}`);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }

                // add the row to the end of the table body
                tblBody.appendChild(row);
            }

            // put the <tbody> in the <table>
            tbl.appendChild(tblBody);
            // appends <table> into <body>
            document.body.appendChild(tbl);
            // sets the border attribute of tbl to '2'
            tbl.setAttribute("border", "2");

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection) {
                this.redraw();
            }
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