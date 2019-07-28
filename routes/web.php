<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('cakes');
});

Route::get('/cake/{uri_tail}', function ($uri_tail) {
    return view('cake')->with('uri_tail', $uri_tail);;
});

Route::get('/cakes/new', function () {
    return view('new');
});