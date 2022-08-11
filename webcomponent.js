(function () {



    let template = document.createElement("template");
    template.innerHTML = `

			<style>
				:host {
					display: block;
                    overflow-x:auto;
                
				} 
			</style> 

            <div>
            <a id="exportCSV" href="">Excel</a> 
			<div id="chart_div"></div>
            </div>    
             <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
             <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.min.js"></script>
             <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
		`;


    class HelloWorld1 extends HTMLElement {



        constructor() {
            super();
            let shadowRoot = this.attachShadow({
                mode: "open"
            });


            shadowRoot.appendChild(template.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });


            this._props = {};


        }




        //Fired when the widget is added to the html DOM of the page
        connectedCallback() {
            /*

            const script = document.createElement('script');
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
            script.addEventListener("load", callback);
            shadowRoot.appendChild(script);
*/





            google.charts.load('current', {
                'packages': ['Table']
            });
            google.charts.setOnLoadCallback(function () {
                drawTable();
            });


            var ctx = this.shadowRoot.getElementById('chart_div');

            function drawTable() {


                var data = new google.visualization.DataTable();

                data.addColumn('string', 'Name');
                data.addColumn('number', 'Salary');
                data.addColumn('boolean', 'Full Time Employee');
                data.addRows([
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true]

                ]);

                var table = new google.visualization.Table(ctx);


                table.draw(data, {
                    showRowNumber: false,
                    width: '100%',
                    height: '100%'
                });



            }

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
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        }
        */

        redraw() {


        }
    }
    customElements.define('com-sap-sample-helloworld1', HelloWorld1);
})();