<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Hardy Challenge</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    <!-- CSS Styles -->
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/app.css">
    <title>Leaderboards</title>
</head>
<body>
    <div>
        <header class="header">  
            <img class="logo" src="{{ asset('storage/hc_logo.png') }}" alt="Hardy Challenge Logo">
        </header>
        <div class="lead_container">


            
            <h1 class="title"><img src="{{ asset('storage/hc_tit.png') }}" alt="Hardy Challenge"></h1>
            <div><img class="date_img" src="{{ asset('storage/hc_fecha.png') }}" alt=""></div>
            <section class="alto section">
                <div id="countdown">
                    <div id='tiles'></div>
                    <div class="labels">
                        <li>Days</li>
                        <li>Hours</li>
                        <li>Mins</li>
                        <li>Secs</li>
                    </div>
                </div>
            </section>
            {{--  <div id="clockdiv">
                <div>
                    <span class="days"></span>
                    <div class="smalltext">Días</div>
                </div>
                <div>
                    <span class="hours"></span>
                    <div class="smalltext">Horas</div>
                </div>
                <div>
                    <span class="minutes"></span>
                    <div class="smalltext">Minutos</div>
                </div>
                <div>
                    <span class="seconds"></span>
                    <div class="smalltext">Segundos</div>
                </div>
            </div>  --}}
            <section class="section">    
                <div class="location">
                    <div class="inner">
                        <img src="{{ asset('storage/location.png') }}" alt="Location">
                        <span><strong>Las Brusquitas</strong>, Club de Playa</span>
                    </div>
                    <iframe width="600" height="450" frameborder="0" style="border:0;width: 100%;height: 400px;" src="https://www.google.com/maps/embed/v1/view?zoom=17&center=-38.2453%2C-57.7790&key=AIzaSyBVaPFM8AaBlY9Jx9ci41Bf6vr0jX8E3Wo" allowfullscreen></iframe>
                </div>
            </section>
            
            {{--  <div class="countdown"><p id="countdown"></p></div>  --}}
                {{--  <div class="">
                    <div class="thead">
                        <div class="theading">Posición</div>
                        <div class="theading">Equipo</div>
                        <div class="theading">Puntaje Total</div>
                    </div>
                    <div class="tbody">
                    </div>        
                </div>  --}}
                <section class="section">
                    <div class="social">
                        <a href="https://www.instagram.com/hardychallenge/" target="_blank"><img src="{{ asset('storage/instagram.png') }}" alt=""></a>
                        <a href="https://www.facebook.com/hardychallenge/" target="_blank"><img src="{{ asset('storage/facebook.png') }}" alt=""></a>
                    </div>
                </section>
                <div class="promo">
                        <div class="img_container" id="natu"><img  src="{{ asset('storage/pote_natural-rojo.png') }}" alt=""></div>
                        <div class="img_container" id="choco"><img  src="{{ asset('storage/pote_chocolate.png') }}" alt=""></div>
                        <div class="img_container" id="coco"><img  src="{{ asset('storage/pote_coco.png') }}" alt=""></div>
                        <div class="img_container" id="prote"><img  src="{{ asset('storage/pote_proteica.png') }}" alt=""></div>
                        <div class="img_container" id="cookie"><img  src="{{ asset('storage/pote_cookie-cream.png') }}" alt=""></div>
                    </div>
                <section class="section">
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
                            <div class="sponsor_item">
                                <img id="mariocano" src="{{ asset('storage/sponsors/mariocano.png') }}" alt="Taurus">
                            </div>
                            <div class="sponsor_item" id="hpb">
                                <img  src="{{ asset('storage/sponsors/handpowbalm_logo.png') }}" alt="Hand Power Balm">
                            </div>
                            <div class="sponsor_item" id="ikr">
                                <img  src="{{ asset('storage/sponsors/ikr.png') }}" alt="IKR Indumentaria">
                            </div> 
                            <div class="sponsor_item">
                                <img id="fitjuice" src="{{ asset('storage/sponsors/fitjuice.png') }}" alt="Taurus">
                            </div>
                        </div>        
                            
                    </div>
                </section> 
        </div>
        <footer>
            <span>Powered by DMD Live Scoring</span>

        </footer>
    </div>
            

  <script type="text/javascript" src="{{ asset('js/web.js') }}"></script>
</body>
</html>