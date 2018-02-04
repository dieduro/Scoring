<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Hardy Challenge 2018</title>
    <meta name="description" content="Vení a la primera competencia de CrossFit organizada por Hardy crema de maní, en un alucinante club de playa en Miramar. Sábado 3 y Domingo 4 de Febrero te esperamos para pasar un fin de semana a puro CrossFit y playa!."/>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    <!-- CSS Styles -->
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/app.css">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-113206459-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-113206459-1');
    </script>

</head>
<body>
    {{--  <div class="web_container">  --}}
        <header class="header">  
            <img class="logo" src="{{ asset('storage/hc_logo.png') }}" alt="Hardy Challenge Logo">
        </header>
        <div class="lead_container">


            
            <h1 class="title"><img src="{{ asset('storage/hc_tit.png') }}" alt="Hardy Challenge"></h1>
            <div class="date-tirita">
                {{--  <span> SÁBADO 3/2 + DOMINGO 4/2</span>  --}}
                <img src="{{ asset('storage/date-tirita.jpg') }}" alt="">
            </div>


             <section class="section">
                <h2 class="subheading padding10">LEADERBOARDS</h2>
                <p class="leyenda2 padding10">¡Consultá las tablas de posiciones en VIVO!</p>
                <div class="categorias">
                    <div class="cat">
                        <div class="nivel" id="rxd">
                            <span>RXD</span>
                        </div>
                        <div class="sexo_outer" style="justify-content: center;">
                            <div class="sexo_inner" style="flex-basis: 80%;" id="cat1">
                                <span class="clickable">RXD</span>
                            </div>
                           
                        </div>
                    </div>
                    <div class="cat">
                        <div class="nivel" id="rxd">
                            <span>SCALED</span>
                        </div>
                        <div class="sexo_outer">
                            <div class="sexo_inner" id="cat3">
                                <span class="clickable">HOMBRES</span>
                            </div>
                            <div class="sexo_inner" id="cat4">
                                <span class="clickable">MUJERES</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="before-leaderboards">
                    <img src="http://hardy.fit/wp-content/uploads/2017/11/slider-4.jpg" alt="">

                </div>

                <div class="noshow leaderboard flex-col-center">
                    <div class=" noshow teams" >
                        <div class="noshow flex-col-center" id="team-row">
                            <div class="main-info flex-row-center">
                                <div class="position"><span></span></div>
                                <div class="team ">
                                    <span class="teamName"></span>
                                    <span class="points"></span>
                                    <span class="athNames"></span>
                                </div>
                                <div class="plus flex-row-center "><img class="plus-click" src="https://png.icons8.com/material/50/333333/menu.png"></div>
                            </div>
                            <div class="noshow eventScores flex-row-center">
                                <span id="e1"></span>
                                <span id="e2"></span>
                                <span id="e3"></span>
                                <span id="e4"></span>
                                <span id="e5"></span>
                                <span id="e6"></span>
                            </div>
                        </div>

                </div>
            </section>
            

            
            {{--  <section class="alto section">
                <div id="countdown">
                    <div id='tiles'></div>
                    <div class="labels">
                        <li>Días</li>
                        <li>Horas</li>
                        <li>Mins</li>
                        <li>Secs</li>
                    </div>
                </div>
            </section>    --}}
            {{--  <section class="section">
                <div id="info">
                    <p>
                        Aca una informacion muy informacionadamente sobre cosas de la vida relacionadas al cf y a la playa , por el estilo y más allá
                    </p>

                </div>
            </section>  --}}

            {{--  <section class="section">    
                <div class="location">
                    <div class="inner">
                        <img src="{{ asset('storage/location.png') }}" alt="Location">
                        <span><strong>Las Brusquitas</strong>, Club de Playa</span>
                    </div>
                   
                    <iframe class="map" height="300" frameborder="0"  src="https://www.google.com/maps/embed/v1/view?zoom=17&center=-38.2453%2C-57.7790&key=AIzaSyBVaPFM8AaBlY9Jx9ci41Bf6vr0jX8E3Wo" allowfullscreen></iframe>
                </div>
            </section>  --}}
            
        
                <section class="section" id="promo_sec">
                    <div class="promo">
                        <div class="potes">
                            <div class="img_container" id="natu"><img  src="{{ asset('storage/pote_natural-rojo.png') }}" alt=""></div>
                            <div class="img_container" id="choco"><img  src="{{ asset('storage/pote_chocolate.png') }}" alt=""></div>
                            <div class="img_container" id="coco"><img  src="{{ asset('storage/pote_coco.png') }}" alt=""></div>
                            <div class="img_container" id="prote"><img  src="{{ asset('storage/pote_proteica.png') }}" alt=""></div>
                            <div class="img_container" id="cookie"><img  src="{{ asset('storage/pote_cookie-cream.png') }}" alt=""></div>
                        </div>
                        <span class="leyenda">Probá nuestras nuevas variedades en el stand!</span>
                    </div>   
                    </section>

                    
                <section class="section ">
                    <div class="sponsors">
                        <div class="tira">
                            <div class="sponsor_item" id="profit">
                                <img  src="{{ asset('storage/sponsors/profit.png') }}" alt="Taurus">
                            </div>    
                            <div class="sponsor_item" id="brsq">
                                <img src="{{ asset('storage/brusquitas_negro.png') }}" alt="Las Brusquitas">
                            </div>
                            <div class="sponsor_item" id="trs">
                                <img  src="{{ asset('storage/sponsors/taurus.png') }}" alt="Taurus">
                            </div>
                            <div class="sponsor_item" id="rbk">
                                <img  src="{{ asset('storage/sponsors/reebok.png') }}" alt="Reebok">
                            </div>     
                            
                            
                        </div>
                        <div class="tira">    
                           
                            <div class="sponsor_item" id="ikr">
                                <img  src="{{ asset('storage/sponsors/ikr.png') }}" alt="IKR Indumentaria">
                            </div> 
                            <div class="sponsor_item">
                                <img id="fitjuice" src="{{ asset('storage/sponsors/fitjuice.png') }}" alt="Taurus">
                            </div>
                        </div>        
                            
                    </div>
                </section>
                {{--  <div class="bloque" id="goToLeaderboards">
                <div class="btn-rojo" id="rxd">
                    <span>Ir a Leaderboards</span>
                </div>  --}}
            </div> 
        </div>
        <footer>
            <div class="social">
                <a href="https://www.instagram.com/hardychallenge/" target="_blank"><img id="instagram" src="{{ asset('storage/instagram.png') }}" alt=""></a>
                <a href="https://www.facebook.com/hardychallenge/" target="_blank"><img src="{{ asset('storage/facebook.png') }}" alt=""></a>
            </div>
            <div class="h_logo">
                <p class="cta">Visitá nuestra web</p>
                <a href="http://www.hardy.fit"><img src="{{ asset('storage/hardy.png') }}" alt="HARDY"></a>
            </div>  
            <div class="firma">
                <p>DMD Live Scoring</p>
            </div>
        </footer>
    {{--  </div>  --}}
            

  <script type="text/javascript" src="{{ asset('js/web.js') }}"></script>
</body>
</html>