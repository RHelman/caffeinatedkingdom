<!doctype html>

<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta name="description" content="Caffeine Intake Tracker">
        <meta name="author" content="Rael Helman">
         
        <meta property="og:image" content="/img/coffee_wood_background.jpg">
        <meta property="og:title" content="Caffeinated Kingdom: Track your levels of get up and go">
        <meta property="og:url" content="https://caffeinatedkingdom.com">
        <meta property="og:site_name" content="Caffeinated Kingdom.com">
         
        <meta http-equiv="x-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 

        <link rel="shortcut icon" type="image/png" href="img/favicon.png">

        
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/caffeine.css">
        <title>@yield('title')</title>
    </head>

    <body>
        <!--Menu will go here -->
        @yield('content')

        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="{{asset('js/app.js')}}" ></script>
        <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </body>
</html>