<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New cake</title>
        <link rel="stylesheet" type="text/css" href="/css/app.css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="header"></div>
        <div id="new"></div>
        <div id='footer'></div>
        <script type="text/javascript">
            var api = "{{env('APIURL')}}";
        </script>
        <script type="text/javascript" src="/js/new.js"></script>
    </body>
</html>