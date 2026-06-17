<section id="servicios" class="servicios" aria-labelledby="servicios-title">
    <div class="servicios__inner">
        <header class="servicios__header">
            <p class="servicios__label">SERVICIOS</p>
            <h2 id="servicios-title" class="servicios__title">
                Lo que <span class="servicios__titleAccent">ofrecemos</span>
            </h2>
        </header>

        <div class="servicios__grid">
            <?php foreach ($services as $service): ?>
                <article class="servicios__card servicios__card--<?= e($service['variant']) ?>">
                    <div class="servicios__imageWrap">
                        <img
                            src="<?= e($service['image']) ?>"
                            alt="<?= e($service['imageAlt']) ?>"
                            class="servicios__image"
                        />
                    </div>
                    <div class="servicios__body">
                        <h3 class="servicios__cardTitle"><?= e($service['title']) ?></h3>
                        <p class="servicios__cardText"><?= e($service['description']) ?></p>
                        <span class="servicios__badge"><?= e($service['badge']) ?></span>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
