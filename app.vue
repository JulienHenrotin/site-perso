<template>
  <div class="scroll-smooth font-sans text-gray-900">
    <!-- Navigation bar -->
    <header class="fixed top-0 w-full bg-white shadow-md z-10">
      <UContainer>
        <nav class="flex justify-center space-x-8 py-4">
          <!-- Anchor links to each section -->
          <ULink to="#presentation" class="text-lg font-medium hover:text-blue-600">Présentation</ULink>
          <ULink to="#projets" class="text-lg font-medium hover:text-blue-600">Projets</ULink>
          <ULink to="#competences" class="text-lg font-medium hover:text-blue-600">Compétences</ULink>
          <ULink to="#contact" class="text-lg font-medium hover:text-blue-600">Contact</ULink>
        </nav>
      </UContainer>
    </header>

    <main class="pt-20">
      <!-- Section: Présentation -->
      <section id="presentation" class="py-16">
        <UContainer>
          <h2 class="text-3xl font-semibold text-center">Présentation</h2>
          <div class="mt-4 text-center text-gray-500 animate-pulse">
            🚧 Contenu en cours de réalisation...
          </div>
        </UContainer>
      </section>

      <!-- Section: Projets -->
      <section id="projets" class="py-16">
        <UContainer>
          <h2 class="text-3xl font-semibold text-center">Projets</h2>
          <div class="mt-4 text-center text-gray-500 animate-pulse">
            🚧 Contenu en cours de réalisation...
          </div>
        </UContainer>
      </section>

      <!-- Section: Compétences -->
      <section id="competences" class="py-16">
        <UContainer>
          <h2 class="text-3xl font-semibold text-center">Compétences</h2>
          <div class="mt-4 text-center text-gray-500 animate-pulse">
            🚧 Contenu en cours de réalisation...
          </div>
        </UContainer>
      </section>

      <!-- Section: Contact -->
      <section id="contact" class="py-16">
        <UContainer>
          <h2 class="text-3xl font-semibold text-center">Contact</h2>
          <div class="mt-4 text-center text-gray-500 animate-pulse">
            🚧 Contenu en cours de réalisation...
          </div>
        </UContainer>
      </section>
    </main>
  </div>
</template>


