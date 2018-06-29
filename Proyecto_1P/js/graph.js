var labelType, useGradients, nativeTextSupport, animate;


function init(){
  // init data
  var json = {
    id: "190_0",
    name: "EL TEATRO",
    children: [
        {
          id: "306208_1",
          name: "Tragedia",
          children: [
            {
              id: "84_2",
              name: "Hamlet",
              children: []
            },
            {
              id: "84_3",
              name: "Romeo y Julieta",
              children: []
            },
            {
              id: "84_4",
              name: "Otelo",
              children: []
            }
          ]
        },
        {
          id: "107877_3",
          name: "Comedia",
          data: {
            relation: "<h4>Neil Young & Pearl Jam</h4><b>Connections:</b><ul><li>Pearl Jam <div>(relation: collaboration)</div></li><li>Neil Young <div>(relation: collaboration)</div></li></ul>"
          },
          children: [
            {
              id: "964_4",
              name: "Las Ranas",
              children: []
            },
            {
              id: "964_5",
              name: "Pluto",
              children: []
            },
            {
              id: "964_6",
              name: "El avaro",
              children: []
            }
          ]
        },
        {
          id: "236797_5",
          name: "Drama",
          children: [
              {
                id: "1756_6",
                name: "Mcbeth",
                children: []
              },
              {
                id: "14581_7",
                name: "Hamlet",
                children: []
              },
              {
                id: "50188_8",
                name: "Casa de muñecas",
                children: []
              },
              {
                id: "115632_10",
                name: "El rey Lear",
                children: []
              }
          ]
        },
        {
          id: "41529_12",
          name: "Ópera",
          children: [
              {
                id: "1756_13",
                name: "Rigoletto",
                children: []
              },
              {
                id: "14581_14",
                name: "La Traviata",
                children: []
              },
              {
                id: "24119_15",
                name: "Don Pasquale",
                children: []
              },
              {
                id: "50188_16",
                name: "El Barbero de Sevilla",
                children: []
              },
          ]
        },
        {
          id: "131161_18",
          name: "Monólogo",
          data: {
            relation: "<h4>Eddie Vedder</h4><b>Connections:</b><ul><li>Pearl Jam <div>(relation: member of band)</div></li><li>Temple of the Dog <div>(relation: member of band)</div></li><li>Eddie Vedder & Zeke <div>(relation: collaboration)</div></li><li>Bad Radio <div>(relation: member of band)</div></li><li>Beck & Eddie Vedder <div>(relation: collaboration)</div></li></ul>"
          },
          children: [
              {
                id: "1756_19",
                name: "Temple of the Dog",
                data: {
                  relation: "<h4>Temple of the Dog</h4><b>Connections:</b><ul><li>Eddie Vedder <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              },
              {
                id: "72007_20",
                name: "Eddie Vedder & Zeke",
                data: {
                  relation: "<h4>Eddie Vedder & Zeke</h4><b>Connections:</b><ul><li>Eddie Vedder <div>(relation: collaboration)</div></li></ul>"
                },
                children: []
              },
              {
                id: "236657_21",
                name: "Bad Radio",
                data: {
                  relation: "<h4>Bad Radio</h4><b>Connections:</b><ul><li>Eddie Vedder <div>(relation: member of band)</div></li></ul>"
                },
                children: []
              },
              {
                id: "432176_22",
                name: "Beck & Eddie Vedder",
                data: {
                  relation: "<h4>Beck & Eddie Vedder</h4><b>Connections:</b><ul><li>Eddie Vedder <div>(relation: collaboration)</div></li></ul>"
                },
                children: []
              }
          ]
        },
        
    ],
    data: {
      relation: "<h4>Pearl Jam</h4><b>Connections:</b><ul><li>Pearl Jam & Cypress Hill <div>(relation: collaboration)</div></li><li>Neil Young & Pearl Jam <div>(relation: collaboration)</div></li><li>Jeff Ament <div>(relation: member of band)</div></li><li>Stone Gossard <div>(relation: member of band)</div></li><li>Eddie Vedder <div>(relation: member of band)</div></li><li>Mike McCready <div>(relation: member of band)</div></li><li>Matt Cameron <div>(relation: member of band)</div></li><li>Dave Krusen <div>(relation: member of band)</div></li><li>Matt Chamberlain <div>(relation: member of band)</div></li><li>Dave Abbruzzese <div>(relation: member of band)</div></li><li>Jack Irons <div>(relation: member of band)</div></li></ul>"
    }
  };
  // end
  // init RGraph
  var rgraph = new $jit.RGraph({
    // Where to append the visualization
    injectInto: 'infovis',
    // Optional: create a background canvas and plot
    // concentric circles in it.
    background: {
      CanvasStyles: {
        strokeStyle: '#555',
        shadowBlur: 10,
        shadowColor: '#ccc'
      }
    },
    // Set Edge and Node styles
    Node: {
      overridable: true,
      color: '#ccddee',
      dim: 12
    },
    Edge: {
      overridable: true,
      color: '#C17878',
      lineWidth: 1.5
    },
    // Use native canvas text
    Label: {
      type: labelType,
      size: 11,
      family: 'Verdana',
      color: '#fff'
    },
    //Add events for Dragging and dropping nodes
    Events: {
      enable: true,
      type: 'Native',
      onMouseEnter: function(node, eventInfo, e){
        rgraph.canvas.getElement().style.cursor = 'move';
      },
      onMouseLeave: function(node, eventInfo, e){
        rgraph.canvas.getElement().style.cursor = '';
      },
      onDragMove: function(node, eventInfo, e){
        var pos = eventInfo.getPos();
        node.pos.setc(pos.x, pos.y);
        rgraph.plot();
      },
      onDragEnd: function(node, eventInfo, e){
        rgraph.compute('end');
        rgraph.fx.animate( {
          modes: [
            'linear'
          ],
          duration: 700,
          transition: $jit.Trans.Elastic.easeOut
        });
      },
      //touch events
      onTouchStart: function(node, eventInfo, e) {
        //stop the default event
        $jit.util.event.stop(e);
      },
      onTouchMove: function(node, eventInfo, e){
        //stop the default event
        $jit.util.event.stop(e);
        var pos = eventInfo.getPos();
        node.pos.setc(pos.x, pos.y);
        rgraph.plot();
      },
      onTouchEnd: function(node, eventInfo, e){
        //stop the default event
        $jit.util.event.stop(e);
        rgraph.compute('end');
        rgraph.fx.animate( {
          modes: [
            'linear'
          ],
          duration: 700,
          transition: $jit.Trans.Elastic.easeOut
        });
      }
    },
    //Add the name of the node in the correponding label
    //and a click handler to move the graph.
    //This method is called once, on label creation.
    onCreateLabel: function(domElement, node){
      domElement.innerHTML = node.name;
    },
    //Change some label dom properties.
    //This method is called each time a label is plotted.
    onPlaceLabel: function(domElement, node){
        var style = domElement.style;
        style.display = '';
        style.cursor = 'pointer';

        if (node._depth <= 1) {
            style.fontSize = "0.8em";
            style.color = "#ccc";
        
        } else if(node._depth == 2){
            style.fontSize = "0.7em";
            style.color = "#494949";
        
        } else {
            style.display = 'none';
        }

        var left = parseInt(style.left);
        var w = domElement.offsetWidth;
        style.left = (left - w / 2) + 'px';
    }
  });
  // load JSON data
  rgraph.loadJSON(json);
  // compute positions and make the first plot
  rgraph.refresh();
  // end
}
var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
  })();




