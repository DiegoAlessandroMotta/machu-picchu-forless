<?php
$defaultTitle = 'Machu Picchu Forless - Packages to Peru';
$defaultDescription = 'Discover the heart of Peru with Machu Picchu Forless. Expertly planned Cusco tours. Immerse yourself in culture and breathtaking scenery.';
$siteUrl = url('');
$image = [
    'url' => asset('/img/machu-picchu-forless.webp'),
    'width' => 1200,
    'height' => 630,
    'type' => 'image/webp',
];
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <title inertia>{{ $defaultTitle }}</title>
  <meta name="description" content="{{ $defaultDescription }}" inertia>
  <link rel="canonical" href="{{ $siteUrl }}">

  <meta property="og:locale" content="{{ str_replace('-', '_', app()->getLocale()) }}" inertia>
  <meta property="og:url" content="{{ $siteUrl }}" inertia>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="{{ $defaultTitle }}" inertia>
  <meta property="og:title" content="{{ $defaultTitle }}" inertia>
  <meta property="og:description" content="{{ $defaultDescription }}" inertia>
  <meta property="og:image" content="{{ $image['url'] }}" inertia>
  <meta property="og:image:width" content="{{ $image['width'] }}" inertia>
  <meta property="og:image:height" content="{{ $image['height'] }}" inertia>
  <meta property="og:image:type" content="{{ $image['type'] }}" inertia>
  <meta name="twitter:title" content="{{ $defaultTitle }}" inertia>
  <meta name="twitter:description" content="{{ $defaultDescription }}" inertia>
  <meta name="twitter:image" content="{{ $image['url'] }}" inertia>
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="{{ $siteUrl }}" inertia>
  <meta property="twitter:url" content="{{ $siteUrl }}" inertia>

  @routes
  @viteReactRefresh
  @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
  @inertiaHead
</head>

<body class="font-sans antialiased">
  @inertia
</body>

</html>
