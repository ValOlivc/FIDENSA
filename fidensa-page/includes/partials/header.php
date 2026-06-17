<header class="header" id="site-header">
    <a class="header__brand" href="/" aria-label="FIDENSA GROUP - Inicio">
        <img
            class="header__logo"
            src="<?= e(asset('img/LOGO-FIDENSA.png')) ?>"
            alt=""
            width="52"
            height="52"
        />
        <div class="header__wordmark">
            <span class="header__title">FIDENSA</span>
            <span class="header__subtitle">GROUP</span>
        </div>
    </a>

    <nav aria-label="Principal">
        <ul class="header__nav">
            <?php foreach ($navLinks as $link): ?>
                <li>
                    <a class="header__link" href="<?= e($link['href']) ?>">
                        <?= e($link['label']) ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </nav>
</header>
