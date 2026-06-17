<section class="banner3" aria-label="Beneficios FIDENSA">
    <div class="banner3__inner">
        <?php foreach ($bannerFeatures as $feature): ?>
            <article class="banner3__item">
                <div class="banner3__iconWrap<?= $feature['purple'] ? ' banner3__iconWrap--purple' : '' ?>">
                    <img
                        src="<?= e($feature['icon']) ?>"
                        alt=""
                        class="banner3__iconImg"
                        width="28"
                        height="28"
                    />
                </div>
                <div class="banner3__text">
                    <h2 class="banner3__title"><?= e($feature['title']) ?></h2>
                    <p class="banner3__description"><?= e($feature['description']) ?></p>
                </div>
            </article>
        <?php endforeach; ?>
    </div>
</section>
