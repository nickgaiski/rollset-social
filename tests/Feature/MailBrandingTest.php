<?php

use App\Models\User;
use Illuminate\Auth\Notifications\VerifyEmail;

test('markdown notification emails use the Rollset Social brand', function () {
    config([
        'app.name' => 'Rollset Social',
        'app.url' => 'https://rollset.test',
    ]);

    $user = User::factory()->unverified()->create();

    $html = (string) (new VerifyEmail)->toMail($user)->render();

    expect($html)->toContain('https://rollset.test/shoutrrr.png');
    expect($html)->toContain('alt="Rollset Social Logo"');
    expect($html)->toContain('#f5c97a');
    expect($html)->not->toContain('#7dd000');
    expect($html)->not->toContain('laravel.com/img/notification-logo');
    expect($html)->not->toContain('Laravel Logo');
});
