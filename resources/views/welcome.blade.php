<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <?php
            header("Cache-Control: no-cache, must-revalidate"); //HTTP 1.1
            header("Pragma: no-cache"); //HTTP 1.0
            header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
        ?>
        <meta charset="utf-8">

        @env('local')
            <!-- Disable cache on dev mode -->
            <meta http-equiv="cache-control" content="no-cache, no store"/>
        @endenv

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Vue-TS-Test</title>

        @production
            <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
        @endproduction

        @env('local')
            <link href="http://localhost:8080/css/app.css" rel="stylesheet"/>
        @endenv
    </head>
    <body>
        <div id="app"></div>

        @production
            <script src="{{ asset('js/manifest.js') }}"></script>
            <script src="{{ asset('js/vendor.js') }}"></script>
            <script src="{{ asset('js/app.js') }}"></script>
        @endproduction

        @env('local')
            <script src="http://localhost:8080/js/manifest.js"></script>
            <script src="http://localhost:8080/js/vendor.js"></script>
            <script src="http://localhost:8080/js/app.js"></script>
        @endenv
    </body>
</html>
