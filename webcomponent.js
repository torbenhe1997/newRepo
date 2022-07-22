(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <header>
    <h1> responsive css </h1>
    <p>...with fixed column and row headers and scroll snap. - <a href="https://twitter.com/scottjehl/status/1407356545080434697">@scottjehl</a></p>
  </header>
  <main>
    <div role="region" aria-label="data table" tabindex="0" class="primary">
      <!-- Note: use the aria-label attribute above to describe this keyboard-focusable region appropriately, per your implementation. Alternatively, it could instead be an aria-labelledby attribute that points to a table caption's ID attribute. Thx for thoughts, @aardrian  -->
      <table>
        <thead>
          <tr>
            <th class="pin"> </th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
            <th>Col Header</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
          <tr>
            <th>Row Header</th>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
            <td>Cell Data</td>
          </tr>
        </tbody>
      </table>
    </div>
    <aside>
      sidebar
    </aside>
  </main>
  <footer>
    Site footer
  </footer>
    `;

    customElements.define('com-sap-sample-helloworld1', class HelloWorld1 extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){
            redraw()
        }
        */

        redraw(){
        }
    });
})();