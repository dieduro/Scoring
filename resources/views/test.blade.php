<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Scoring</title>

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
            <div id="clockdiv">
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
            </div>
            <section class="section">    
                <div class="location">
                            <img id="brsq" src="{{ asset('storage/brusquitas_negro.png') }}" alt="Las Brusquitas">
                            <iframe width="600" height="450" frameborder="0" style="border:0;width: 100%;height: 400px;" src="https://www.google.com/maps/embed/v1/view?zoom=17&center=-38.2453%2C-57.7790&key=AIzaSyBVaPFM8AaBlY9Jx9ci41Bf6vr0jX8E3Wo" allowfullscreen></iframe>
                            {{--  <img id="map" src="{{ asset('storage/brusqui_map4.jpg') }}" alt="Mapa Las Brusquitas">  --}}
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
                <section>
                    <div class="media">
                        <a href="https://www.instagram.com/hardychallenge/" target="_blank"><img src="{{ asset('storage/instagram.png') }}" alt=""></a>
                        <a href="https://www.facebook.com/hardychallenge/" target="_blank"><img src="{{ asset('storage/facebook.png') }}" alt=""></a>
                    </div>
                </section>
                <section class="section">
                    <div class="sponsors">
                        <div class="sponsor_item">
                            <img id="hpb" src="{{ asset('storage/sponsors/handpowbalm_logo.png') }}" alt="Hand Power Balm">
                        </div>
                        <div class="sponsor_item">
                            <img id="ikr" src="{{ asset('storage/sponsors/ikr.png') }}" alt="IKR Indumentaria">
                        </div>
                        <div class="sponsor_item">
                            <img id="rbk" src="{{ asset('storage/sponsors/reebok.png') }}" alt="Reebok">
                        </div>
                        <div class="sponsor_item">
                        <img id="trs" src="{{ asset('storage/sponsors/taurus2.png') }}" alt="Taurus">
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