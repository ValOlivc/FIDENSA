<?php

declare(strict_types=1);

function asset(string $path): string
{
    return '/assets/' . ltrim($path, '/');
}

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

$navLinks = [
    ['label' => 'Servicios', 'href' => '#servicios'],
    ['label' => 'Nosotros', 'href' => '#nosotros'],
    ['label' => '¿Cómo funciona?', 'href' => '#como-funciona'],
    ['label' => 'Habla con un Asesor', 'href' => '#asesor'],
    ['label' => 'Blog', 'href' => '#blog'],
];

$bannerFeatures = [
    [
        'title' => '100% seguro',
        'description' => 'Información protegida y confidencial',
        'icon' => asset('icons/candado.png'),
        'purple' => false,
    ],
    [
        'title' => 'Aprobación express',
        'description' => 'Respuesta en menos de 24 horas',
        'icon' => asset('icons/rayo.png'),
        'purple' => false,
    ],
    [
        'title' => 'Sin fiador',
        'description' => 'Créditos accesibles sin garantías complejas',
        'icon' => asset('icons/apretón.png'),
        'purple' => false,
    ],
    [
        'title' => 'Atención por WhatsApp',
        'description' => 'Tu asesor disponible cuando lo necesitas',
        'icon' => asset('icons/whatsapp.png'),
        'purple' => true,
    ],
];

$services = [
    [
        'title' => 'Créditos Individuales',
        'description' => 'Para emprendedores e independientes que buscan capital de trabajo o inversión personal. Montos flexibles según tu capacidad.',
        'badge' => 'Desde S/ 500',
        'image' => asset('servicios/creditos-individuales.svg'),
        'imageAlt' => 'Créditos individuales',
        'variant' => 'light',
    ],
    [
        'title' => 'Atención Inmediata',
        'description' => 'Un asesor dedicado te contacta en menos de 2 horas para guiarte en todo el proceso sin complicaciones.',
        'badge' => 'Más solicitado',
        'image' => asset('servicios/atencion-inmediata.svg'),
        'imageAlt' => 'Atención inmediata',
        'variant' => 'dark',
    ],
    [
        'title' => 'Créditos Grupales',
        'description' => 'Ideal para grupos de comerciantes o emprendedores. Mejores tasas y condiciones cuando aplican en conjunto.',
        'badge' => 'Mayor beneficio',
        'image' => asset('servicios/creditos-grupales.svg'),
        'imageAlt' => 'Créditos grupales',
        'variant' => 'light',
    ],
];

$processSteps = [
    [
        'number' => '01',
        'title' => 'Solicita en línea',
        'description' => 'Contáctanos por WhatsApp o llena el formulario. Solo toma 5 minutos desde cualquier dispositivo.',
    ],
    [
        'number' => '02',
        'title' => 'Evaluación rápida',
        'description' => 'Nuestro equipo revisa tu solicitud y te da una respuesta preliminar en menos de 2 horas.',
    ],
    [
        'number' => '03',
        'title' => 'Tu asesor te llama',
        'description' => 'Un asesor personal te contacta para coordinar los detalles y resolver todas tus dudas.',
    ],
    [
        'number' => '04',
        'title' => '¡Recibe tu dinero!',
        'description' => 'Aprobado el crédito, el desembolso se realiza en 24 horas. Así de simple.',
    ],
];

$footerCompanyLinks = [
    'Servicios',
    'Nosotros',
    'Atención al cliente',
    'Pasos para tener tu credito',
    'Contáctanos',
];

$footerSocialLinks = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'];

$banner2Beneficios = [
    'Acompañamiento personalizado',
    'Acceso a mayores montos de crédito de pago puntual',
    'Reuniones cerca de tu zona',
    'Tasa de interes competitiva',
    'Evaluación rapida y flexible',
];
