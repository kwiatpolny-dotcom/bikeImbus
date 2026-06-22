const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authTabs = document.querySelectorAll('.auth-tab');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

document.addEventListener('DOMContentLoaded', async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        window.location.href = 'index.html';
        return;
    }
    setupEventListeners();
});

function setupEventListeners() {
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    document.getElementById('googleLoginBtn').addEventListener('click', handleGoogleLogin);
}

function switchTab(tabName) {
    authTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    loginForm.classList.toggle('active', tabName === 'login');
    registerForm.classList.toggle('active', tabName === 'register');
    hideMessages();
}

async function handleLogin(e) {
    e.preventDefault();
    hideMessages();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const submitBtn = loginForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Logowanie...';

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    submitBtn.disabled = false;
    submitBtn.textContent = 'Zaloguj się';

    if (error) {
        showError('Nieprawidłowy email lub hasło');
        return;
    }

    showSuccess('Logowanie pomyślne! Przekierowywanie...');
    setTimeout(() => window.location.href = 'index.html', 800);
}

async function handleRegister(e) {
    e.preventDefault();
    hideMessages();

    const workshopName = document.getElementById('registerWorkshopName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

    if (!workshopName || !email || !password || !passwordConfirm) {
        showError('Proszę wypełnić wszystkie pola');
        return;
    }
    if (password.length < 6) {
        showError('Hasło musi mieć minimum 6 znaków');
        return;
    }
    if (password !== passwordConfirm) {
        showError('Hasła nie są identyczne');
        return;
    }

    const submitBtn = registerForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Tworzenie konta...';

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { workshopName } }
    });

    submitBtn.disabled = false;
    submitBtn.textContent = 'Utwórz konto';

    if (error) {
        showError(
            error.message.includes('already registered')
                ? 'Użytkownik o tym adresie email już istnieje'
                : `Błąd rejestracji: ${error.message}`
        );
        return;
    }

    showSuccess('Konto zostało utworzone! Możesz się teraz zalogować.');
    setTimeout(() => {
        switchTab('login');
        document.getElementById('loginEmail').value = email;
        registerForm.reset();
    }, 1500);
}

async function handleGoogleLogin() {
    hideMessages();
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/index.html' }
    });
    if (error) showError('Błąd logowania przez Google: ' + error.message);
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    successMessage.classList.remove('show');
}

function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.classList.add('show');
    errorMessage.classList.remove('show');
}

function hideMessages() {
    errorMessage.classList.remove('show');
    successMessage.classList.remove('show');
}
