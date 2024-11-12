<template>
    <main class="home-page">
        <h1>Code Generator</h1>

        <form @submit.prevent="handleSubmit">
            <h3>Project Settings</h3>
            <div class="field">
                <label for="project-name">Name:</label>
                <InputText v-model="formData.name" id="project-name" required />
            </div>
            <div class="field">
                <label for="package-name">Package Name:</label>
                <InputText v-model="formData.packageName" id="package-name" required />
            </div>
            <h3>Build Tool</h3>
            <div class="field">
                <RadioButton v-model="formData.buildTool" value="maven" id="maven" />
                <label for="maven">Maven</label>
                <RadioButton v-model="formData.buildTool" value="gradle" id="gradle" />
                <label for="gradle">Gradle</label>
            </div>
            <h3>Open API Specs</h3>
            <div class="field">
                <FileUpload @change="handleFileUpload" name="apiSpecs" />
            </div>
            <h3>Upstream Settings</h3>
            <div class="field">
                <label for="upstream-type">Upstream Type:</label>
                <Dropdown
                    v-model="formData.upstreamType"
                    :options="upstreamOptions"
                    id="upstream-type"
                    optionLabel="name"
                    placeholder="Select Upstream Type"
                />
            </div>
            <Button label="Submit" icon="pi pi-check" type="submit" />
        </form>
    </main>
</template>

<script>
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import FileUpload  from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';


export default {
    components: {
        InputText,
        RadioButton,
        FileUpload,
        Dropdown,
        Button,
    },
    data() {
      return {
        formData: {
            name: '',
            packageName: '',
            buildTool: 'maven',
            upstreamType: null,
        },
        upstreamOptions: [
            { name: 'Rest', code: 'REST' },
            { name: 'SOAP', code: 'SOAP' },
            { name: 'Database', code: 'Database' },
            { name: 'FBEQ', code: 'FBEQ' },
        ],
      };
    },
    methods: {
        handleFileUpload(event) {
        const file = event.files[0];
        if (file) {
            console.log('File uploaded:', file.name);
        }
        },
        handleSubmit() {
        console.log('Form submitted:', this.formData);
        alert('Form submitted successfully!');
        },
  },
}
</script>

<style scoped>
.main-content {
  flex-grow: 1;
  padding: 20px;
  text-align: left; /* Aligns text to the left */
}
.logo {
  text-align: center;
}
h3 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.field {
  text-align: left; /* Ensures each field's content is left-aligned */
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 25%;
}

.field label {
  width: 5rem; /* Adjust width as needed */
  margin-right: 2rem;
  text-align: left;
}

.field input,
.field .p-inputtext {
  flex: 1;
  width: 100%;
}
</style>
