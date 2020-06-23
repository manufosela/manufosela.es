/* Author: @manufosela
*/

/*********************************************************************
/*
/*		BASIC
*/
      var activeSlide, hS;
      var idEditingElement;

      var mainBGColor1 = "#077";
      var mainBGColor2 = "#770";

      var hBarrSup = 60;
      var hHeader = 30;
      var hFooter = 30;
      var headerBG = "#FA5";
      var headerColor = "#F00";
      var tabSelBG = "#AA0";
      var tabSelColor = "#FFF";
      var menuSupPos = "right";

      $(document).ready(function() {
        $("body").show("slow");

        $(".ui-widget-header").css({background:"#FF0"});
        $(".barra-sup").css({height:hBarrSup+"px"});
        $(".barra-sup").css({background: "-moz-linear-gradient(-90deg,"+mainBGColor1+","+mainBGColor2+")"});
        $(".barra-sup").css({background: "-webkit-gradient(linear, left top, left bottom, from("+mainBGColor1+"), to("+mainBGColor2+"))"});
        $("header").css({ height:hHeader+"px", background:headerBG, color:headerColor });
        $("footer").css({ height:hFooter+"px" });
        $("footer").css({background: "-moz-linear-gradient(-90deg,"+mainBGColor2+","+mainBGColor1+")"});
        $("footer").css({background: "-webkit-gradient(linear, left top, left bottom, from("+mainBGColor2+"), to("+mainBGColor1+"))"});
        
        $("#loading_img").hide();

        
        resize();
        $(window).resize(function() { resize('refresh'); });
        

        var tmp = window.location.hash.replace("#","");
        activeSlide = (tmp!="")?tmp:"A";

        $(".slide").hide();
        $("#slide_"+activeSlide).show();

        $(".menu-item").removeClass("activeMenuItem");
        $("#menu_Slide_"+activeSlide).addClass("activeMenuItem");

        $(".menu-item").each(function() {
            $(this).click(function() {
                showSlide($(this));
            });
        });

        $( ".con_scroll").each(function() {
            $(this).css({height:(hS-100)+"px"});
        });

        if ($('#tabs')) {        
          $( "#tabs" ).tabs();
        }

        if ($('#accordion')) {        
          $( "#accordion" ).accordion();
        }

        if ($('#datepickerEl')) {        
          $( "#datepickerEl" ).datepicker();
        }

        if ($('#slideshowHolder')) {
          $('#slideshowHolder').jqFancyTransitions({ width: 948, height: 300 });
        }

        //$(".ui-tabs .ui-tabs-nav li").css({background:"#EEE"});
        //$(".ui-tabs .ui-tabs-panel").css({background:tabSelBG, color:tabSelColor });
        //$(".ui-tabs .ui-tabs-nav li.ui-tabs-selected").css({background:tabSelBG });
        //$(".ui-tabs .ui-tabs-nav li.ui-tabs-selected a").css({ color:tabSelColor });
        $("#fl_menu").css({float:menuSupPos});
        $("#logoHeader").css({ width:"100px", height:hBarrSup, float:"left",background:"url(img/logo_ejemplo.png) no-repeat"});



        var countAcc = 0;
        $( ".ui-accordion-content" ).each(function() { countAcc++; });
        $( ".ui-accordion-content" ).css({height:(hS/countAcc)+"px"});

       
        $( ".tab_con_scroll" ).each(function() {
          $(this).parent().css({height:(hS-180)+"px"});
          $(this).css({height:(hS-200)+"px"});
        });

        /* MENU A 320px DE ANCHO */
        var float_speed=1500; //milliseconds
        var float_easing="easeOutQuint";
        var menu_fade_speed=500; //milliseconds
        var closed_menu_opacity=0.75;
        var wW = $(window).width();

        fl_menu_menu=$("#fl_menu .menu");
        fl_menu_label=$("#fl_menu .label"); 
        if (typeof $("#fl_menu").attr("id") != "undefined") {
          menuPosition = $('#fl_menu').position().top;

          $("#fl_menu").hover(
             function() { //mouse over
                 if (wW <= 320) {
                   $("#fl_menu .label").fadeTo(menu_fade_speed, 1);
                   $("#fl_menu .menu").fadeIn(menu_fade_speed);
                 }
             },
             function(){ //mouse out
               if (wW <= 320) {
                 $("#fl_menu .label").fadeTo(menu_fade_speed, closed_menu_opacity);
                 $("#fl_menu .menu").fadeOut(menu_fade_speed);
               }
             }
          );
          $("#fl_menu").click(function(){
             if (wW <= 320) {
               if (menuVisible) {
                   $("#fl_menu .label").fadeTo(menu_fade_speed, 1);
                   $("#fl_menu .menu").fadeIn(menu_fade_speed);
               } else {
                   $("#fl_menu .label").fadeTo(menu_fade_speed, closed_menu_opacity);
                   $("#fl_menu .menu").fadeOut(menu_fade_speed);
               }
               menuVisible = !menuVisible;
             }
          });

        }
        //INI****ELIMINAR_AL_GENERAR****

        $("#slider").easySlider({
          auto: true,
          continuous: true,
          controlsShow: false,
          speed: 800,
          pause: 2000
        });


        //CARGA EL MODULO DE EDICION SI PROCEDE
        var tmp = location.href.split("?");
        if (tmp.length > 1) {
          var tmp1 = tmp[1].split("#");
          if (tmp1[0] == "edit") {
            $.getScript("js/editable.js");
          }
        }
        //CARGA EL MODULO DE POSICION SI PROCEDE
        var tmp = location.href.split("?");
        if (tmp.length > 1) {
          var tmp1 = tmp[1].split("#");
          if (tmp1[0] == "place") {
            $.getScript("js/placeable.js");
          }
        }
        //FIN****ELIMINAR_AL_GENERAR****

        nextSlide = function(mode) {
            var li           = slides.eq(current),
                canvas       = li.find('canvas'),
                nextIndex    = 0;
            if(mode == "next") {
                nextIndex = current >= slides.length-1 ? 0 : current+1;
            }
            else {
                nextIndex = current <= 0 ? slides.length-1 : current-1;
            }

            var next = slides.eq(nextIndex);

            if(supportCanvas){
                canvas.fadeIn(function(){
                    next.show();
                    current = nextIndex;
                    li.fadeOut(function(){
                        li.removeClass('slideActive');
                        canvas.hide();
                        next.addClass('slideActive');
                    });
                });
            }
            else {
                current=nextIndex;
                next.addClass('slideActive').show();
                li.removeClass('slideActive').hide();
            }
        }

        createCanvasOverlay = function (image) {
            var canvas            = document.createElement('canvas'),
                canvasContext    = canvas.getContext("2d");

            canvas.width = slideshow.width;
            canvas.height = slideshow.height;

            canvasContext.drawImage(image,0,0);

            var imageData    = canvasContext.getImageData(0,0,canvas.width,canvas.height),
                data        = imageData.data;

            for(var i = 0,z=data.length;i<z;i++){
                data[i] = ((data[i] < 128) ? (2*data[i]*data[i] / 255) :
                            (255 - 2 * (255 - data[i]) * (255 - data[i]) / 255));
                data[++i] = ((data[i] < 128) ? (2*data[i]*data[i] / 255) :
                            (255 - 2 * (255 - data[i]) * (255 - data[i]) / 255));
                data[++i] = ((data[i] < 128) ? (2*data[i]*data[i] / 255) :
                            (255 - 2 * (255 - data[i]) * (255 - data[i]) / 255));
                ++i;
            }
            canvasContext.putImageData(imageData,0,0,0,0,imageData.width,imageData.height);
            image.parentNode.insertBefore(canvas,image);
        }
        /**************++ FIN JS CAROUSEL **************************/
      });

      showSlide = function(_this) {
          var hash = _this.attr("href");
          var nextSlide = hash.replace("#","");
          $(".menu-item").removeClass("activeMenuItem");
          $("#slide_"+activeSlide).hide("slide", { direction: "left" }, 1000);
          $("#slide_"+nextSlide).show("slide", { direction: "right" }, 1000);
          $("#menu_Slide_"+nextSlide).addClass("activeMenuItem");
          activeSlide = nextSlide;
      }

      resize = function(modo) {
        hS = $(window).height() - $("footer").height() - $("header").height() - $("#slideshow").height() - 10;
        hAccItems = 0;
        var offset = 80;
        $("#main").css({height:hS+"px"});
        $(".tabEl").css({height:(hS-offset)+"px"});
        $(".tab_con_scroll" ).each(function() {
          $(this).parent().css({height:(hS-offset)+"px"});
          $(this).css({height:(hS-offset)+"px"});
        });
        $( ".con_scroll").each(function() {
            $(this).css({height:(hS-offset)+"px"});
        });
      }

      showModalWindow = function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        idEditingElement = $(this).parent().parent().attr("id");
        $("#editingContentId").html(idEditingElement);
        var contentToEdit = $("#"+idEditingElement).html();
        if (contentToEdit == null) {
          alert("El elemento no ha sido creado en la base de datos. Generar primero.");
        } else {
          contentToEdit = "" + contentToEdit.replace(EDIT_HTML_BUTTON,'').replace(EDIT_HTML_BUTTON2,"");
          tinyMCE.get('contentEditing').setContent(contentToEdit);
          $("#contentEditing").html(contentToEdit);

          var maskHeight = $(document).height();
          var maskWidth = $(window).width();

          $('#windowModalMask').css({'width':maskWidth,'height':maskHeight});
          $('#windowModalMask').fadeIn(500);    
          $('#windowModalMask').fadeTo("slow",0.4);  

          var winH = $(window).height();
          var winW = $(window).width();
                 
          $(id).css('top',  winH/2-$(id).height()/2);
          $(id).css('left', winW/2-$(id).width()/2);

          $(id).fadeIn(1000);
        }
      }

      saveEditedElement = function(idEl,contentEl) {
          $.get("config/savecontent.php",{id:idEl, content:contentEl}, function(data) {
            var data = jQuery.parseJSON(res);
            if (data.code == 0) {
              console.log("Saved correctly");
            } else {
              console.log("ERROR. " + data.msg);
            }

          });
      }

/*********************************************************************
/*
/*		SCRIPTS
*/

