<template>
<div class="flex justify-content-center p-fluid">
    <div v-focustrap class="card">
        <div class="field">
          <label for="username">Имя</label>
            <InputText id="input" v-model="name" type="text" placeholder="Имя" autofocus />
        </div>
        <div class="field">
          <label for="username">Фамилия</label>
            <InputText id="input" v-model="surname" type="text" placeholder="Фамилия" autofocus />
        </div>
        <div class="field">
          <label for="username">Email</label>
            <div class="p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText id="email" v-model="email" type="email" placeholder="Email" />
            </div>
        </div>
        <div class="field">
          <label for="username">Password</label>
            <div class="p-float-label">
                <Password v-model="password" placeholder="Password" toggleMask>
                    <template #header>
                        <h6>Pick a password</h6>
                    </template>
                    <template #footer>
                        <Divider />
                        <p class="mt-6">Предложения</p>
                        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </Password >
                <!--<label for="password" >Пароль</label>-->
            </div>
        </div>
        <!--<div class="field-checkbox">
            <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
            <label for="accept">I agree to the terms and conditions*</label>
        </div>-->
        <Button type="submit" label="Зарегистрироваться" class="mt-2" />
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref();
const surname = ref();
const email = ref();
const password = ref();
const accept = ref();
</script>