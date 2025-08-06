// JotFormInitializer.js
import { useEffect } from 'react';

export default function JotFormInitializer() {
    useEffect(() => {
        // Load scripts dynamically after React renders
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const initializeJotForm = async () => {
            try {
                // Wait for elements to be rendered
                await new Promise(resolve => setTimeout(resolve, 100));

                // Load JotForm scripts
                await loadScript('/jotform.js');
                await loadScript('/jotform.init.js');

                // Verify elements exist
                const requiredElements = ['id_243', 'input_317']; // Add all required IDs
                requiredElements.forEach(id => {
                    if (!document.getElementById(id)) {
                        console.warn(`Element not found: ${id}`);
                    }
                });

                // Reinitialize JotForm if needed
                // if (window.JotForm && window.JotForm.init) {
                //     window.JotForm.init();
                //     window.JotForm.attachEvent();
                // }
            } catch (error) {
                console.error('JotForm initialization failed:', error);
            }
        };

        initializeJotForm();

        return () => {
            // Cleanup if needed
        };
    }, []);

    return null;
}