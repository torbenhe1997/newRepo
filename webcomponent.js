(function()  {

    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <table>
    <thead>
      <tr>
        <th class="pin"> </th>
        <th>Col Header</th>
        </tr>
        </thead>
    </table>
    `;
  

    customElements.define('com-sap-sample-helloworld1', class HelloWorld1 extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){

    

            
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){

        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {


            var newDiv = document.createElement("div");
            var newContent = document.createTextNode("Hi there and greetings!");
            newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.
          
            // füge das neu erstellte Element und seinen Inhalt ins DOM ein
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            this.redraw();
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        }
        */

        redraw(){}
    });
})();