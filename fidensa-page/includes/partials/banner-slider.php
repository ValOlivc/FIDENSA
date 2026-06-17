<?php
$banner1Description = "Impulsa tu trabajo con un crédito pensado para ti\n\nSi eres taxista, comerciante, albañil,\nemprendedor o independiente, tenemos una\nsolución financiera que se adapta a tu realidad.\nAccede a un crédito rápido, seguro y con\natención personalizada para ayudarte a seguir\ncreciendo.";
?>

<div class="bannerSlider">
    <div class="bannerSlider__track" id="banner-track">
        <div class="bannerSlider__slide">
            <section class="crediCarousel" aria-label="Carrusel de créditos">
                <div class="crediCarousel__inner">
                    <div class="crediCarousel__text">
                        <h1 class="crediCarousel__title">
                            CREDI<span class="crediCarousel__titleAccent">Avanza</span>
                        </h1>
                        <p class="crediCarousel__description"><?= e($banner1Description) ?></p>
                        <button class="crediCarousel__cta" type="button">Solicita tu crédito</button>
                    </div>

                    <div class="crediCarousel__media">
                        <span class="crediCarousel__dot crediCarousel__dot--orange" aria-hidden="true"></span>
                        <img
                            class="crediCarousel__photo"
                            src="<?= e(asset('img/banner1.png')) ?>"
                            alt="Crédito Avanza"
                        />
                        <span class="crediCarousel__dot crediCarousel__dot--yellow" aria-hidden="true"></span>
                    </div>
                </div>
                <div class="crediCarousel__dots" aria-label="Selector de carrusel">
                    <button type="button" class="crediCarousel__dotButton" data-banner-dot="0" aria-label="Ir al banner 1" aria-current="true"></button>
                    <button type="button" class="crediCarousel__dotButton" data-banner-dot="1" aria-label="Ir al banner 2"></button>
                </div>
            </section>
        </div>

        <div class="bannerSlider__slide">
            <section class="crediMujer" aria-label="Carrusel de créditos para mujeres">
                <div class="crediMujer__inner">
                    <div class="crediMujer__text">
                        <h1 class="crediMujer__title">
                            CREDI<span class="crediMujer__titleAccent">Mujer</span>
                        </h1>
                        <p class="crediMujer__lead">Dirigido a mujeres emprendedoras o comerciantes</p>
                        <h2 class="crediMujer__subtitle">BENEFICIOS</h2>
                        <ul class="crediMujer__list">
                            <?php foreach ($banner2Beneficios as $item): ?>
                                <li><?= e($item) ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <button class="crediMujer__cta" type="button">Solicita tu crédito</button>
                    </div>

                    <div class="crediMujer__media">
                        <span class="crediMujer__dot crediMujer__dot--orange" aria-hidden="true"></span>
                        <img class="crediMujer__photo" src="<?= e(asset('img/banner2.png')) ?>" alt="Mujeres emprendedoras" />
                        <span class="crediMujer__dot crediMujer__dot--yellow" aria-hidden="true"></span>
                    </div>
                </div>
                <div class="crediMujer__indicators" aria-label="Selector de carrusel">
                    <button type="button" class="crediMujer__indicatorButton" data-banner-dot="0" aria-label="Ir al banner 1"></button>
                    <button type="button" class="crediMujer__indicatorButton" data-banner-dot="1" aria-label="Ir al banner 2"></button>
                </div>
            </section>
        </div>
    </div>
</div>
