<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// !Vue ---
Route::get('/', function () {
    return view('vue');
});

//  !Inertia ---
Route::get('/inertia', function () {
    return Inertia::render('index');
});
