/* Author: @manufosela
*/

/*********************************************************************
/*
/*    BASIC
*/
      $(document).ready(function() {
        $("body").show("slow");
        $("body").css({"overflow":"auto"});

        // SI APLICA ES SOLO SI HAY SLIDES
        var tmp = localStorage.getItem('activeSlide');
        activeSlide = "A"; //(tmp!="")?tmp:"A";
        localStorage.setItem("activeSlide",activeSlide);
        //$(".slide").hide();
        //console.log("Slide: "+activeSlide);
        //$("#slide_"+activeSlide).show();

        $(".masinfo").each(function() {
            $(this).click(function() {
                showSlide($(this));
                return false;
            });
        });
        $(".volver_slide").each(function() {
          $(this).click(function() {
            var nextSlide = "A";
            $("#slide_"+activeSlide).hide("slide", { direction: "right" }, 1000, function() {
              $("#slide_"+nextSlide).show("slide", { direction: "left" }, 1000);
            });
            activeSlide = nextSlide;
            localStorage.setItem("activeSlide",activeSlide);
            //console.log("Slide: "+activeSlide);
            return false;
          });
        });

        // TABS DE NAVEGACION
        $("#menu > li a").each(function() {
          $(this).click(function(e) {
            document.location.hash="";
            $("#menu > li a").each(function() {
              $(this).removeClass("menuSel");
              $(this).parent().removeClass("menuSel");
            });
            $(".tabEl").hide();
            var id = $(this).attr("href").replace("#","")
            $("#C"+id).fadeIn();
            $("#"+$(this).attr("id")).css({"color":"#FF0;"});
            $("#"+$(this).attr("id")).addClass("menuSel");
            $("#"+$(this).attr("id")).parent().addClass("menuSel");
            document.location.hash=id;
            return false;
          });
        });
        if (!location.hash) { location.hash="tabs-1"; }
        var id = location.hash.replace("#","") ;
        var n = id.split("-")[1];
        var id2 = "Tab_"+n+"-Title";
        $(".tabEl").hide();
        $("#C"+id).fadeIn();
        $("#"+id2).css({"color":"#FF0;"});
        $("#"+id2).addClass("menuSel");
        $("#"+id2).parent().addClass("menuSel");
        $("#texto_buscar").focus(function() { if ($(this).val() == 'Buscar') { $(this).val(''); } });
        $("#texto_buscar").blur(function() { if ($(this).val() == '') { $(this).val('Buscar'); } });
        $("#texto_buscar").trigger("blur");

        // CALENDARIO
        if ($('#datepickerEl')) { $( "#datepickerEl" ).datepicker(); }

        // ANIMACION FOTO SLIDES
        if ($('#slideshowHolder')) { $('#slideshowHolder').jqFancyTransitions({ width: 948, height: 300 }); }

        //CARGA EL MODULO DE EDICION SI PROCEDE
        var tmp = location.href.split("?");
        if (tmp.length > 1) {
          var tmp1 = tmp[1].split("#");
          if (tmp1[0] == "edit") {
            $.getScript("js/editable.js");
          }
        }

        // WINDOW MODAL GMAP
        $('#windowModalMask2').click(function () { $("#windowModalGMap").hide(); $(this).hide(); $("body").css({"overflow":"auto"}); });
        $("#carousel_masinfo").click(showModalWindowGMap);
        $('#closeGmap').click(function (e) { e.preventDefault(); $("body").css({"overflow":"auto"}); $('#windowModalMask2, .windowModalGmap').hide(); return false; });

        //WINDOW MODAL AVISOS (5)
        $("#avisosLink").click(function(e){
          e.preventDefault();
          var id = "windowModal5";
          var winH = $(window).height();
          var winW = $(window).width();

          $('#windowModalMask5').css({'width':winW,'height':winH});
          $('#windowModalMask5').fadeIn(500);
          $('#windowModalMask5').fadeTo("slow",0.8);

          $("#windowModal5").css('top',  winH/2-$("#windowModal5").height()/2);
          $("#windowModal5").css('left', winW/2-$("#windowModal5").width()/2);

          $("#windowModal5").show(1000);

          $(window).scrollTop(0);
          $("body").css({"overflow":"hidden"});
        });
        $('#close5').click(function (e) { e.preventDefault(); $("body").css({"overflow":"auto"}); $('#windowModalMask5, .windowModal5').hide(); return false; });
        $('#windowModalMask5').click(function () { $("#windowModal5").hide(); $(this).hide(); $("body").css({"overflow":"auto"}); });

        $("#btnSendAviso").click(function(e){
          var comunidad = $("form[name=avisosform] input[name=DIRECCION_COMUNIDAD]").val();
          var cp_comunidad= $("form[name=avisosform] input[name=CODIGO_POSTAL]").val();
          var solicitante = $("form[name=avisosform] input[name=SOLICITANTE]").val();
          var telefono = $("form[name=avisosform] input[name=TELEFONO1]").val();
          var aviso = $("form[name=avisosform] textarea[name=AVISO]").val();
          if (aviso != "" && comunidad != "" && cp_comunidad != "" && solicitante != "" && telefono != "") {
            var params = {};
            $("form[name=avisosform] input.form_field").each(function() {
              params[$(this).attr("name")] = $(this).val();
            })
            params["AVISO"] = $("#form_avisos_aviso").val();
            params["FIGURA"] = $("#form_avisos_figura").val();
            $.post("php/send_aviso.php",params, function(res) {
              var res = jQuery.parseJSON(res);
              if (res.code==0) {
                alert("RECIBIDO");
              } else {
                if (res.code=="-1") alert("EN DESARROLLO...");
                else
                alert("ERROR ENVIANDO AVISO.");
              }
            });
          } else {
            alert("Debe rellenar al menos los campos marcados con *");
          }
          $('#close5').trigger("click");
        });

        //ZONA CLIENTES
        $("#accZonaClientes").click(function(e){
          e.preventDefault();
          var id = "windowModal4";
          var winH = $(window).height();
          var winW = $(window).width();

          $('#windowModalMask4').css({'width':winW,'height':winH});
          $('#windowModalMask4').fadeIn(500);
          $('#windowModalMask4').fadeTo("slow",0.8);

          $("#windowModal4").css('top',  winH/2-$("#windowModal4").height()/2);
          $("#windowModal4").css('left', winW/2-$("#windowModal4").width()/2);

          $("#windowModal4").show(1000);

          $(window).scrollTop(0);
          $("body").css({"overflow":"hidden"});
        });
        $('#close4').click(function (e) { e.preventDefault(); $("body").css({"overflow":"auto"}); $('#windowModalMask4, .windowModal4').hide(); return false; });
        $('#windowModalMask4').click(function () { $("#windowModal4").hide(); $(this).hide(); $("body").css({"overflow":"auto"}); });

        $("#btnZonaCliente").click(function(e) {
          if ($("#idUsuario").val()!="" && $("#claveUsuario").val != "") {
            $.get("zonacliente/login.php",{"u":$("#idUsuario").val(),"p":SHA1($("#claveUsuario").val())}, function(res) {
              var res = jQuery.parseJSON(res);
              if (res.code==0) {
                $("body").fadeOut(500);
                setTimeout(function() {
                  window.location.href='zonacliente/oficinavirtual.php';
                },600);
              } else {
                alert("Error de login. Introduzca su código de usuario y su clave.");
              }
            });
          }
          e.preventDefault();
        });

        $("#btnZonaDemo").click(function(e) {
          $.get("zonacliente/login.php",{"u":"demo","p":SHA1("demo")}, function(res) {
            var res = jQuery.parseJSON(res);
            if (res.code==0) {
              $("body").fadeOut(500);
              setTimeout(function() {
                window.location.href='zonacliente/oficinavirtual.php';
              },600);
            } else {
              alert("Error de login. Introduzca su código de usuario y su clave.");
            }
          });
          e.preventDefault();
        });

        $("#enviar_btn_presupuesto").click(function(){
          var comunidad = $("form[name=presupuestosform] input[name=DIRECCION_COMUNIDAD]").val()
          var cp_comunidad= $("form[name=presupuestosform] input[name=CODIGO_POSTAL]").val()
          var solicitante = $("form[name=presupuestosform] input[name=SOLICITANTE]").val()
          var telefono = $("form[name=presupuestosform] input[name=TELEFONO1]").val()
          if (comunidad != "" && cp_comunidad != "" && solicitante != "" && telefono != "") {
            var params = {};
            $("form[name=presupuestosform] input.form_field").each(function() {
              params[$(this).attr("name")] = $(this).val();
            })
            params["FIGURA"] = $("#form_avisos_figura").val();
            $.post("php/send_budget.php",params, function(res) {
              var res = jQuery.parseJSON(res);
              if (res.code==0) {
                alert("RECIBIDO");
              } else {
                if (res.code=="-1") alert("EN DESARROLLO...");
                else
                alert("ERROR ENVIANDO PRESUPUESTO.");
              }
            });
          } else if ( $("#form_presupuesto_email").attr("checked") && $("#form_presupuesto_emailenvio").val() == "") {
            alert("Debe rellenar el campo del correo electrónico donde recibir el presupuesto");
          } else if ( $("#form_presupuesto_correo").attr("checked") && $("#form_presupuesto_direccionenvio").val() == "" ) {
            alert("Debe rellenar la dirección de envio del presupuesto correctamente");
          } else {
            alert("Debe rellenar al menos los campos marcados con *");
          }
        });

        $("#Tab-Disconnect").click(function(e) {
          $.get("login.php",{"o":"disconnect"}, function(res) {
            var res = jQuery.parseJSON(res);
            if (res.code==0) {
              $("body").fadeOut(500);
              setTimeout(function() {
                window.location.href='../index.html';
              },600);
            } else {
              alert("Error de desconexión.");
            }
          });
          e.preventDefault();
        });

        $("#Tab-Disconnect-Comunity").click(function(e) {

          e.preventDefault();
        });

      }); // FIN READY

      showSlide = function(_this) {
          var actualHash = location.hash;
          var hash = _this.attr("href");
          var nextSlide = hash.replace("#","").replace("slide_","");
          $("#slide_"+activeSlide).hide("slide", { direction: "left" }, 1000, function() {
            $("#slide_"+nextSlide).show("slide", { direction: "right" }, 1000);
          });
          activeSlide = nextSlide;
          localStorage.setItem("activeSlide",activeSlide);
          //console.log("Slide: "+activeSlide);
          return false;
      }

      showModalWindowGMap = function(e) {
        e.preventDefault();
        var id = "windowModalGMap";
        var winH = $(window).height();
        var winW = $(window).width();

        $('#windowModalMask2').css({'width':winW,'height':winH});
        $('#windowModalMask2').fadeIn(500);
        $('#windowModalMask2').fadeTo("slow",0.8);

        $("#windowModalGMap").css('top',  winH/2-$("#windowModalGMap").height()/2);
        $("#windowModalGMap").css('left', winW/2-$("#windowModalGMap").width()/2);

        $("#windowModalGMap").show(1000);

        $(window).scrollTop(0);
        $("body").css({"overflow":"hidden"});

        $('#gMap').gmap().bind('init', function() {
          $('#gMap').gmap('addControl', 'control', google.maps.ControlPosition.LEFT_TOP);
          $('#gMap').gmap('addMarker', { 'position': '40.45828,-3.47843', 'bounds': true } );
          $('#gMap').gmap('option', 'zoom', 18);
          //{'center': '40.458524,-3.478696'});
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
          $.post("php/savecontent.php",{id:idEl, content:contentEl}, function(res) {
            var data = jQuery.parseJSON(res);
            if (data.code == 0) {
              console.log("Saved correctly");
            } else {
              console.log("ERROR. " + data.msg);
            }
          });
      }