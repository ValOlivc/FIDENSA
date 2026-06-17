<?php

declare(strict_types=1);

require_once dirname(__DIR__) . '/includes/config.php';
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="<?= e(asset('img/LOGO-FIDENSA.png')) ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FIDENSA group</title>
    <link rel="stylesheet" href="<?= e(asset('css/app.css')) ?>" />
    <link rel="stylesheet" href="<?= e(asset('css/header.css')) ?>" />
    <link rel="stylesheet" href="<?= e(asset('css/footer.css')) ?>" />
    <link rel="stylesheet" href="<?= e(asset('css/banner1.css')) ?>" />
    <link rel="stylesheet" href="<?= e(asset('css/banner2.css')) ?>" />
    <link rel="stylesheet" href="<?= e(asset('css/banner3.css')) ?>" />
    <link rel="stylesheet" href="<?= e(asset('css/servicios.css')) ?>" />
    <link rel="stylesheet" href="<?= e(asset('css/proceso-simple.css')) ?>" />
</head>
<body>
    <?php include dirname(__DIR__) . '/includes/partials/header.php'; ?>

    <?php include dirname(__DIR__) . '/includes/partials/banner-slider.php'; ?>

    <?php include dirname(__DIR__) . '/includes/partials/banner3.php'; ?>

    <?php include dirname(__DIR__) . '/includes/partials/servicios.php'; ?>

    <?php include dirname(__DIR__) . '/includes/partials/proceso-simple.php'; ?>

    <main class="app">
        <section id="nosotros" class="app__section">
            <h2>Nosotros</h2>
        </section>
        <section id="asesor" class="app__section">
            <h2>Habla con un Asesor</h2>
        </section>
    </main>

    <?php include dirname(__DIR__) . '/includes/partials/footer.php'; ?>

    <script src="<?= e(asset('js/main.js')) ?>"></script>
</body>
</html>
