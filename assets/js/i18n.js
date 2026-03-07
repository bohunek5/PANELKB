/**
 * BanCo i18n — System tłumaczeń PL/EN
 * Logika: HTML jest natywnie po polsku. EN jest nakładką JS.
 * PL = reload strony (czyste HTML), EN = aplikuj tłumaczenia JS.
 */

// ============================================================
// SŁOWNIK — TYLKO ANGIELSKI (nakładka na polskie HTML)
// ============================================================
const translationsEN = {
    // NAWIGACJA
    "nav.menu": "Menu",
    "nav.dashboards": "Dashboards",
    "nav.dashboard_default": "Dashboard Default",
    "nav.dashboard_two": "Dashboard Two",
    "nav.statistics": "Statistics",
    "nav.analytics": "Analytics",
    "nav.home": "Home",
    "nav.transaction": "Transaction",
    "nav.my_wallet": "My Wallet",
    "nav.inbox": "Inbox",
    "nav.integrations": "Integrations",
    "nav.user": "User",
    "nav.calender": "Calendar",
    "nav.history": "History",
    "nav.help": "Help",
    "nav.support": "Support",
    "nav.setting": "Setting",
    "nav.others": "Others",
    "nav.signin": "Sign In",
    "nav.signup": "Sign Up",
    "nav.coming_soon": "Coming Soon",
    "nav.logout": "Log Out",
    // UPGRADE BANNER
    "upgrade.title": "Unlimited Cashback",
    "upgrade.desc": "Instant 2% back on all your spend to your account.",
    "upgrade.btn": "Upgrade Now",
    // DASHBOARD
    "dash.total_balance": "Total Balance",
    "dash.quick_transfer": "Quick Transfer",
    "dash.recent_transactions": "Recent Transactions",
    "dash.view_all": "View All",
    "dash.send_money": "Send Money",
    "dash.income_expense": "Income & Expense",
    "dash.total_revenue": "Total Revenue",
    "dash.cashflow": "Cash Flow",
    "dash.customer_map": "Customer Map",
    "dash.this_week": "This Week",
    "dash.this_month": "This Month",
    "dash.this_year": "This Year",
    "dash.chart.weekly": "Weekly",
    "dash.chart.monthly": "Monthly",
    "dash.chart.yearly": "Yearly",
    // TRANSAKCJE
    "tx.title": "Transaction",
    "tx.all": "All",
    "tx.income": "Income",
    "tx.expense": "Expense",
    "tx.filter": "Filter",
    "tx.export": "Export",
    "tx.success": "Success",
    "tx.pending": "Pending",
    "tx.failed": "Failed",
    // STATYSTYKI
    "stats.title": "Statistics",
    "stats.total_users": "Total Users",
    "stats.active_users": "Active Users",
    "stats.new_users": "New Users",
    // PORTFEL
    "wallet.title": "My Wallet",
    "wallet.total": "Total Balance",
    "wallet.add_card": "Add Card",
    "wallet.top_up": "Top Up",
    "wallet.withdraw": "Withdraw",
    "wallet.my_cards": "My Cards",
    // WIADOMOŚCI
    "msg.title": "Messages",
    "msg.new": "New Message",
    "msg.send": "Send",
    // INTEGRACJE
    "int.title": "Integrations",
    "int.connect": "Connect",
    "int.disconnect": "Disconnect",
    "int.configure": "Configure",
    // UŻYTKOWNICY
    "users.title": "Users",
    "users.add": "Add User",
    "users.edit": "Edit",
    "users.delete": "Delete",
    // KALENDARZ
    "cal.title": "Calendar",
    "cal.new_event": "New Event",
    "cal.today": "Today",
    "cal.month": "Month",
    "cal.week": "Week",
    "cal.day": "Day",
    // WSPARCIE
    "support.title": "Support",
    "support.new_ticket": "New Ticket",
    "support.open": "Open",
    "support.closed": "Closed",
    // USTAWIENIA
    "set.title": "Settings",
    "set.save_changes": "Save Changes",
    "set.cancel": "Cancel",
    "set.change_password": "Change Password",
    // LOGOWANIE
    "login.btn": "Sign In",
    "login.forgot": "Forgot Password?",
    "login.remember": "Remember me",
    "login.no_account": "Don't have an account?",
    "login.register": "Sign Up",
    // OGÓLNE
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.export": "Export",
    "common.close": "Close",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.submit": "Submit",
    "common.loading": "Loading...",
    "common.view_all": "View All",
};

// ============================================================
// MEGA słownik: polski HTML → angielski tekst (dla trybu EN)
// Używany gdy user WŁĄCZY angielski — podmienia treść bezpośrednio
// ============================================================
const plToEn = [
    // NAWIGACJA
    ["Pulpity", "Dashboards"],
    ["Pulpit Główny", "Dashboard Default"],
    ["Pulpit Alternatywny", "Dashboard Two"],
    ["Statystyki", "Statistics"],
    ["Analityka", "Analytics"],
    ["Strona główna", "Home"],
    ["Transakcje", "Transaction"],
    ["Mój Portfel", "My Wallet"],
    ["Skrzynka", "Inbox"],
    ["Integracje", "Integrations"],
    ["Użytkownicy", "Users"],
    ["Kalendarz", "Calendar"],
    ["Historia", "History"],
    ["Pomoc", "Help"],
    ["Wsparcie", "Support"],
    ["Ustawienia", "Settings"],
    ["Pozostałe", "Others"],
    ["Zaloguj się", "Sign In"],
    ["Rejestracja", "Sign Up"],
    ["Wkrótce", "Coming Soon"],
    ["Wyloguj", "Log Out"],
    // UPGRADE
    ["Nieograniczony Cashback", "Unlimited Cashback"],
    ["Natychmiastowy zwrot 2% za wszystkie wydatki.", "Instant 2% back on all your spend."],
    ["Ulepsz Teraz", "Upgrade Now"],
    // DASHBOARD
    ["Łączne Saldo", "Total Balance"],
    ["Łączny Przychód", "Total Revenue"],
    ["Szybki Przelew", "Quick Transfer"],
    ["Ostatnie Transakcje", "Recent Transactions"],
    ["Zobacz wszystko", "View All"],
    ["Wyślij Pieniądze", "Send Money"],
    ["Przychody i Wydatki", "Income & Expense"],
    ["Przepływ Gotówki", "Cash Flow"],
    ["Mapa Klientów", "Customer Map"],
    ["Ten tydzień", "This Week"],
    ["Ten miesiąc", "This Month"],
    ["Ten rok", "This Year"],
    ["Poprzedni tydzień", "Last Week"],
    ["Poprzedni miesiąc", "Last Month"],
    // WYKRESY
    ["Tygodniowy", "Weekly"],
    ["Miesięczny", "Monthly"],
    ["Roczny", "Yearly"],
    ["Dzienny", "Daily"],
    // TRANSAKCJE
    ["Przychody", "Income"],
    ["Wydatki", "Expense"],
    ["Przelew", "Transfer"],
    ["Zakupy", "Shopping"],
    ["Jedzenie i Zakupy", "Food & Grocery"],
    ["Jedzenie", "Food"],
    ["Rachunki", "Bills"],
    ["Rozrywka", "Entertainment"],
    ["Zdrowie", "Health"],
    ["Edukacja", "Education"],
    ["Podróże", "Travel"],
    ["Zrealizowano", "Success"],
    ["Oczekująca", "Pending"],
    ["Nieudana", "Failed"],
    ["Pobierz wyciąg", "Download Statement"],
    ["Numer ref.", "Reference"],
    ["Typ transakcji", "Type"],
    ["Wszystkie transakcje", "All Transactions"],
    ["Lista transakcji", "Transaction List"],
    ["Data transakcji", "Transaction Date"],
    ["Imię klienta", "Customer Name"],
    ["Wydano", "Spent"],
    // STATYSTYKI
    ["Łączna liczba użytkowników", "Total Users"],
    ["Aktywni użytkownicy", "Active Users"],
    ["Nowi użytkownicy", "New Users"],
    ["Wskaźnik retencji", "Retention Rate"],
    ["Wzrost klientów", "Customer Growth"],
    ["Wzrost przychodów", "Revenue Growth"],
    // PORTFEL
    ["Moje Karty", "My Cards"],
    ["Dodaj kartę", "Add Card"],
    ["Karta kredytowa", "Credit Card"],
    ["Karta debetowa", "Debit Card"],
    ["Numer karty", "Card Number"],
    ["Data ważności", "Expiry Date"],
    ["Właściciel karty", "Cardholder Name"],
    ["Przelew bankowy", "Bank Transfer"],
    ["Doładuj", "Top Up"],
    ["Wypłać", "Withdraw"],
    ["Dostępne środki", "Available Balance"],
    ["Powiązane konta", "Linked Accounts"],
    ["Wpisz kwotę", "Enter amount"],
    ["Wyślij", "Send"],
    ["Odbierz", "Receive"],
    ["Saldo", "Balance"],
    // WIADOMOŚCI
    ["Szukaj rozmów...", "Search conversations..."],
    ["Nowa wiadomość", "New Message"],
    ["Napisz wiadomość...", "Type a message..."],
    ["Nieprzeczytane", "Unread"],
    ["Zarchiwizowane", "Archived"],
    // INTEGRACJE
    ["Połączono", "Connected"],
    ["Rozłączono", "Disconnected"],
    ["Połącz", "Connect"],
    ["Rozłącz", "Disconnect"],
    ["Konfiguruj", "Configure"],
    ["Dostępne integracje", "Available Integrations"],
    // UŻYTKOWNICY
    ["Szukaj użytkowników...", "Search users..."],
    ["Dodaj użytkownika", "Add User"],
    ["Aktywny", "Active"],
    ["Nieaktywny", "Inactive"],
    ["Administrator", "Admin"],
    ["Imię i nazwisko", "Full Name"],
    ["Dołączył/a", "Joined"],
    ["na stronę", "per page"],
    ["Wyświetlanie", "Showing"],
    ["wyników", "results"],
    // KALENDARZ
    ["Nowe wydarzenie", "New Event"],
    ["Dzisiaj", "Today"],
    ["Miesiąc", "Month"],
    ["Tydzień", "Week"],
    ["Dzień", "Day"],
    ["Cały dzień", "All day"],
    // WSPARCIE
    ["Nowe zgłoszenie", "New Ticket"],
    ["Otwarte", "Open"],
    ["Zamknięte", "Closed"],
    ["Temat", "Subject"],
    ["Priorytet", "Priority"],
    ["Wysoki", "High"],
    ["Średni", "Medium"],
    ["Niski", "Low"],
    ["Utworzono", "Created"],
    ["Zaktualizowano", "Updated"],
    ["Odpowiedz", "Reply"],
    ["Zamknij", "Close"],
    // USTAWIENIA
    ["Zapisz zmiany", "Save Changes"],
    ["Zmień hasło", "Change Password"],
    ["Stare hasło", "Old Password"],
    ["Nowe hasło", "New Password"],
    ["Potwierdź hasło", "Confirm Password"],
    ["Imię", "First Name"],
    ["Nazwisko", "Last Name"],
    ["Telefon", "Phone"],
    ["Adres", "Address"],
    ["Miasto", "City"],
    ["Kraj", "Country"],
    ["Strefa czasowa", "Timezone"],
    ["Waluta", "Currency"],
    ["Tryb ciemny", "Dark Mode"],
    ["Tryb jasny", "Light Mode"],
    ["Włącz", "Enable"],
    ["Wyłącz", "Disable"],
    ["Dane osobowe", "Personal Information"],
    // LOGOWANIE
    ["Zaloguj się do BanCo.", "Sign in to Bankco."],
    ["Zarządzaj finansami mądrze", "Send, spend and save smarter"],
    ["Zaloguj przez Google", "Sign In with Google"],
    ["Zaloguj przez Apple", "Sign In with Apple"],
    ["Lub kontynuuj przez", "Or continue with"],
    ["Login lub e-mail", "Username or email"],
    ["Zapamiętaj mnie", "Remember me"],
    ["Zapomniałeś hasła?", "Forgot Password?"],
    ["Nie masz konta?", "Don't have an account?"],
    ["Regulamin", "Terms & Conditions"],
    ["Polityka prywatności", "Privacy Policy"],
    ["© 2023 BanCo. Wszelkie prawa zastrzeżone.", "© 2023 Bankco. All Rights Reserved."],
    ["Szybko, Prosto i Bezpiecznie", "Speedy, Easy and Fast"],
    // REJESTRACJA
    ["Utwórz konto", "Create Account"],
    ["Masz już konto?", "Already have an account?"],
    // OGÓLNE PRZYCISKI
    ["Zapisz", "Save"],
    ["Anuluj", "Cancel"],
    ["Usuń", "Delete"],
    ["Edytuj", "Edit"],
    ["Dodaj", "Add"],
    ["Szukaj", "Search"],
    ["Filtruj", "Filter"],
    ["Eksportuj", "Export"],
    ["Importuj", "Import"],
    ["Potwierdź", "Confirm"],
    ["Zatwierdź", "Submit"],
    ["Resetuj", "Reset"],
    ["Wybierz", "Select"],
    ["Wróć", "Back"],
    ["Dalej", "Next"],
    ["Poprzedni", "Previous"],
    ["Pobierz", "Download"],
    ["Wgraj", "Upload"],
    ["Zastosuj", "Apply"],
    ["Wyczyść", "Clear"],
    ["Wróć do pulpitu", "Back to Dashboard"],
    ["Pobierz więcej", "Load More"],
    // POWIADOMIENIA
    ["Powiadomienia", "Notifications"],
    ["Brak nowych powiadomień", "No new notifications"],
    // OGÓLNE
    ["Ładowanie...", "Loading..."],
    ["Brak danych", "No data found"],
    // STOPKA
    ["Wszelkie prawa zastrzeżone", "All Rights Reserved"],
    ["Stworzone z ❤️ przez", "Made with ❤️ by"],
    ["Sprawdź swoje finanse", "Let's check your finances"],
    // CZAT
    ["Czat zespołu", "Team Chat"],
    ["Cześć! Jak mogę pomóc?", "Hi, What can I help you with?"],
    ["Napisz tutaj...", "Type here..."],
    // HISTORIA
    ["Łączne zarobki", "Total Earnings"],
    ["od zeszłego tygodnia", "from last week"],
    ["Przepływ przychodów", "Revenue Flow"],
    ["Wydajność", "Efficiency"],
    ["Wpływ", "Arrival"],
    // FILTRY
    ["Filtry", "Filters"],
    ["Lokalizacja", "Location"],
    ["Województwo", "State or province"],
    ["Wybierz datę", "Select date"],
    ["Poprzedni", "Previous"],
    ["Następny", "Next"],
];

// ============================================================
// CORE i18n ENGINE
// ============================================================
const i18n = {
    // Domyślnie PL — chyba że user wcześniej wybrał EN
    current: localStorage.getItem('banco-lang') === 'en' ? 'en' : 'pl',

    setLang(lang) {
        this.current = lang;
        localStorage.setItem('banco-lang', lang);
        if (lang === 'pl') {
            // PL = natywny HTML — po prostu przeładuj stronę
            window.location.reload();
        } else {
            // EN = aplikuj angielskie tłumaczenia
            this.applyEnglish();
            this.updateToggle();
        }
    },

    // Aplikuj angielski (nakładka na polskie HTML)
    applyEnglish() {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach(node => {
            const parent = node.parentElement;
            if (!parent) return;
            // Pomiń skrypty, style i inputy
            const tag = parent.tagName;
            if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'CODE') return;

            let text = node.textContent;
            let changed = false;

            plToEn.forEach(([pl, en]) => {
                if (text.includes(pl)) {
                    text = text.split(pl).join(en);
                    changed = true;
                }
            });

            if (changed) node.textContent = text;
        });

        // Placeholders
        document.querySelectorAll('[placeholder]').forEach(el => {
            plToEn.forEach(([pl, en]) => {
                if (el.placeholder && el.placeholder.includes(pl)) {
                    el.placeholder = el.placeholder.split(pl).join(en);
                }
            });
        });

        // Title attributes
        document.querySelectorAll('[title]').forEach(el => {
            plToEn.forEach(([pl, en]) => {
                if (el.title && el.title.includes(pl)) {
                    el.title = el.title.split(pl).join(en);
                }
            });
        });

        // HTML lang
        document.documentElement.lang = 'en';
    },

    updateToggle() {
        const btn = document.getElementById('lang-toggle-btn');
        if (!btn) return;
        if (this.current === 'pl') {
            btn.innerHTML = `<span class="lang-flag">🇺🇸</span><span class="lang-label">EN</span>`;
            btn.title = 'Switch to English';
        } else {
            btn.innerHTML = `<span class="lang-flag">🇵🇱</span><span class="lang-label">PL</span>`;
            btn.title = 'Przełącz na polski';
        }
    },

    injectToggle() {
        if (document.getElementById('lang-toggle-btn')) return;

        const btn = document.createElement('button');
        btn.id = 'lang-toggle-btn';
        btn.type = 'button';
        btn.className = 'lang-toggle-btn';
        btn.addEventListener('click', () => {
            this.setLang(this.current === 'pl' ? 'en' : 'pl');
        });

        // Wstaw przed theme-toggle lub na końcu topbara
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle && themeToggle.parentNode) {
            themeToggle.parentNode.insertBefore(btn, themeToggle);
        } else {
            const topbar = document.querySelector('.topbar-wrapper, header, .header-wrapper');
            if (topbar) topbar.appendChild(btn);
        }

        this.updateToggle();
    },

    init() {
        const run = () => {
            this.injectToggle();
            // Jeśli zapisano EN — aplikuj angielskie tłumaczenia
            if (this.current === 'en') {
                this.applyEnglish();
                this.updateToggle();
            }
            // Jeśli PL — nic nie rób, HTML już po polsku!
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', run);
        } else {
            run();
        }
    }
};

// === STYLE ===
const style = document.createElement('style');
style.textContent = `
  .lang-toggle-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 8px;
    border: 1.5px solid rgba(34,197,94,0.4);
    background: transparent;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    color: inherit;
    transition: all 0.2s ease;
    margin-right: 10px;
    vertical-align: middle;
  }
  .lang-toggle-btn:hover {
    background: rgba(34,197,94,0.1);
    border-color: #22C55E;
    transform: scale(1.05);
  }
  .dark .lang-toggle-btn {
    color: #f0f0f0;
    border-color: rgba(34,197,94,0.5);
  }
  .lang-flag { font-size: 18px; line-height: 1; }
  .lang-label { font-size: 12px; letter-spacing: 0.5px; }
`;
document.head.appendChild(style);

// === START ===
i18n.init();
window.i18n = i18n;
