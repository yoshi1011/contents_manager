<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="mx-auto" min-width="500">
        <v-card-title>{{ title }}</v-card-title>
        <form action="/providers" method="post">
          <v-card-text>
            <v-text-field
                label="メールアドレス"
                name="provider[email]"
                prepend-icon="mdi-mail"
                type="email"
            ></v-text-field>
            <v-text-field
                label="パスワード"
                name="provider[password]"
                prepend-icon="mdi-lock"
                type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">{{ title }}</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>();
</script>
