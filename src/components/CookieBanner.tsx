import React, { useState, useEffect } from 'react';
import { Cookie, Settings, ShieldCheck, X, Check, Lock, Info } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeInfoModal, setActiveInfoModal] = useState<'privacy' | 'terms' | null>(null);

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem('comerc_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth page entry
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('comerc_cookie_consent', 'accepted');
    localStorage.setItem(
      'comerc_cookie_preferences',
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('comerc_cookie_consent', 'rejected');
    localStorage.setItem(
      'comerc_cookie_preferences',
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    );
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem('comerc_cookie_consent', 'custom');
    localStorage.setItem('comerc_cookie_preferences', JSON.stringify(preferences));
    setIsSettingsOpen(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Bottom Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5 bg-[#0B0F17]/98 backdrop-blur-xl border-t border-slate-800 text-slate-200 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Cookie Info Text */}
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-2.5 rounded-xl bg-[#004415]/40 border border-[#9EDBB9]/30 text-[#9EDBB9] shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                Sua privacidade é importante para nós
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Utilizamos cookies para oferecer a melhor experiência, melhorar o desempenho do site e personalizar conteúdos. Ao continuar navegando, você concorda com o uso de cookies.{' '}
                <button
                  onClick={() => setActiveInfoModal('privacy')}
                  className="underline hover:text-[#9EDBB9] text-slate-300 transition-colors font-medium focus:outline-none"
                >
                  Política de Privacidade
                </button>
                {' • '}
                <button
                  onClick={() => setActiveInfoModal('terms')}
                  className="underline hover:text-[#9EDBB9] text-slate-300 transition-colors font-medium focus:outline-none"
                >
                  Termos de Uso
                </button>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-end">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="px-3.5 py-2.5 rounded-xl border border-slate-700 hover:border-[#9EDBB9] text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5 bg-slate-900/80 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5 text-[#9EDBB9]" />
              <span>Configurações de cookies</span>
            </button>

            <button
              onClick={handleRejectAll}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Recusar
            </button>

            <button
              onClick={handleAcceptAll}
              className="neon-glow-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer shadow-md flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Aceitar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 max-w-lg w-full text-slate-200 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#004415]/50 border border-[#9EDBB9]/30 text-[#9EDBB9]">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Preferências de Cookies</h3>
                  <p className="text-xs text-slate-400">Gerencie suas escolhas de privacidade</p>
                </div>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-4">
              {/* Category 1: Necessários */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#9EDBB9]" />
                    <h4 className="text-sm font-bold text-white">Cookies Necessários</h4>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-[#9EDBB9] font-bold border border-[#004415]">
                    Sempre Ativos
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Essenciais para o funcionamento seguro e correto do site. Não podem ser desativados no sistema.
                </p>
              </div>

              {/* Category 2: Analíticos / Desempenho */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-bold text-white">Cookies Analíticos & Desempenho</h4>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004415] border border-slate-700"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Permitem contar visitas e fontes de tráfego para medir e melhorar o desempenho da nossa plataforma.
                </p>
              </div>

              {/* Category 3: Marketing / Personalização */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-bold text-white">Cookies de Marketing & Personalização</h4>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004415] border border-slate-700"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Utilizados para exibir anúncios e recomendações mais relevantes de acordo com seu perfil de consumo energético.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                Cancelar
              </button>

              <button
                onClick={handleSaveCustom}
                className="neon-glow-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer shadow-md"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy / Terms Modal */}
      {activeInfoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 max-w-xl w-full text-slate-200 space-y-5 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-[#9EDBB9]" />
                <h3 className="text-base font-bold text-white">
                  {activeInfoModal === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
                </h3>
              </div>
              <button
                onClick={() => setActiveInfoModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeInfoModal === 'privacy' ? (
              <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
                <p>
                  <strong>Comerc Energia — Privacidade e Proteção de Dados:</strong>
                </p>
                <p>
                  Respeitamos sua privacidade e tratamos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
                <p>
                  As informações fornecidas em nossas calculadoras e formulários (como nome, e-mail, telefone e valor de conta de energia) são utilizadas exclusivamente para realizar o diagnóstico energético consultivo e apresentar as melhores soluções para o seu perfil.
                </p>
                <p>
                  Você pode solicitar a alteração ou exclusão dos seus dados a qualquer momento entrando em contato através de nossos canais oficiais de atendimento.
                </p>
              </div>
            ) : (
              <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
                <p>
                  <strong>Comerc Energia — Termos de Uso da Plataforma:</strong>
                </p>
                <p>
                  Ao utilizar a ferramenta de simulação de economia da Comerc Energia, você concorda que todos os valores e projeções gerados são estimativas informativas baseadas em dados médios de mercado e nas informações declaradas por você.
                </p>
                <p>
                  As simulações não constituem proposta contratual vinculante. A adesão final a planos de assinatura solar, mercado livre ou gestão de energia depende de análise técnica e comercial da equipe Comercial Comerc.
                </p>
              </div>
            )}

            <div className="flex justify-end pt-3 border-t border-slate-800">
              <button
                onClick={() => setActiveInfoModal(null)}
                className="neon-glow-btn px-6 py-2 rounded-xl text-xs font-bold text-white cursor-pointer"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
